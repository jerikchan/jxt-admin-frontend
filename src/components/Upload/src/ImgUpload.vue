<template>
  <Upload
    :listType="listType"
    class="avatar-uploader"
    :class="[prefixCls, typeCls]"
    :accept="getStringAccept"
    :beforeUpload="beforeUpload"
    :multiple="false"
    :maxCount="1"
    :fileList="fileListRef"
    :customRequest="handleStartUpload"
    :showUploadList="{ showPreviewIcon: false }"
    @remove="onRemove"
  >
    <div v-if="listType === 'picture-card' && fileListRef.length < 1">
      <PlusOutlined />
      <div class="ant-upload-text">上传</div>
    </div>
    <div v-if="listType === 'text'">
      <Button type="primary">上传图片</Button>
    </div>
  </Upload>
</template>

<script lang="ts">
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { Upload, Button } from 'ant-design-vue';
  import { imgProps } from './props';
  import { computed, ref, toRefs, unref } from 'vue';
  import { omit } from 'lodash-es';
  // types
  import { FileItem, UploadResultStatus } from './typing';
  // hooks
  import { useUploadType } from './useUpload';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useDesign } from '/@/hooks/web/useDesign';
  // utils
  import { buildUUID } from '/@/utils/uuid';
  import { checkImgType, getBase64WithFile } from './helper';
  import { isFunction } from '/@/utils/is';
  import { warn } from '/@/utils/log';

  export default {
    components: {
      PlusOutlined,
      Upload,
      Button,
    },
    props: imgProps,
    emits: ['change', 'update:value', 'done', 'uploading'],
    setup(props, { emit, attrs }) {
      const { prefixCls } = useDesign('img-upload');
      const typeCls = computed(() => {
        return props.listType ? `${prefixCls}-${props.listType}` : '';
      });
      const { createMessage } = useMessage();
      const { accept, helpText, maxNumber, maxSize } = toRefs(props);
      const { getStringAccept } = useUploadType({
        acceptRef: accept,
        helpTextRef: helpText,
        maxNumberRef: maxNumber,
        maxSizeRef: maxSize,
      });
      const fileListRef = ref<FileItem[]>([]);

      function beforeUpload(file: File) {
        const { size, name } = file;
        const { maxSize } = props;
        // 设置最大值，则判断
        if (maxSize && file.size / 1024 / 1024 >= maxSize) {
          createMessage.error(t('component.upload.maxSizeMultiple', [maxSize]));
          return false;
        }
        // 判断图片类型
        if (!checkImgType(file)) {
          createMessage.error('只能上传{0}类型的文件', [getStringAccept]);
          return false;
        }
        const commonItem = {
          uuid: buildUUID(),
          file,
          size,
          name,
          percent: 0,
          type: name.split('.').pop(),
        };
        // beforeUpload，如果异步会调用自带上传方法
        // file.thumbUrl = await getBase64(file);
        return getBase64WithFile(file).then(({ result: thumbUrl }) => {
          fileListRef.value = [
            ...unref(fileListRef),
            {
              thumbUrl,
              ...commonItem,
            },
          ];
        });
      }

      async function uploadApiByItem(item: FileItem) {
        const { api } = props;
        if (!api || !isFunction(api)) {
          return warn('upload api must exist and be a function');
        }
        try {
          item.status = UploadResultStatus.UPLOADING;
          const { data } = await props.api?.(
            {
              data: {
                ...(props.uploadParams || {}),
              },
              file: item.file,
              name: props.name,
              filename: props.filename,
              url: props.url,
            },
            function onUploadProgress(progressEvent: ProgressEvent) {
              const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              item.percent = complete;
            },
          );
          item.status = UploadResultStatus.SUCCESS;
          item.responseData = data;
          return {
            success: true,
            error: null,
          };
        } catch (e) {
          console.log(e);
          item.status = UploadResultStatus.ERROR;
          return {
            success: false,
            error: e,
          };
        }
      }

      async function handleStartUpload() {
        try {
          // 只上传未成功的图片
          const uploadFileList =
            fileListRef.value.filter((item) => item.status !== UploadResultStatus.SUCCESS) || [];

          const originFileInfo = uploadFileList[0];

          emit('uploading', originFileInfo.name);

          const data = await Promise.all(
            uploadFileList.map((item) => {
              return uploadApiByItem(item);
            }),
          );
          // 生产环境:抛出错误
          const errorList = data.filter((item: any) => !item.success);
          if (errorList.length > 0) throw errorList;

          const info = fileListRef.value[0]?.responseData?.result;

          emit('update:value', fileListRef.value);
          emit('change', fileListRef.value);
          emit('done', originFileInfo.name, info?.thumbUrl);
        } catch (e) {
          throw e;
        }
      }

      function onRemove() {
        fileListRef.value = [];
      }

      const bindValue = computed(() => {
        const value = { ...attrs, ...props };
        return omit(value, ['accept', 'onChange']);
      });

      return {
        beforeUpload,
        handleStartUpload,
        onRemove,
        bindValue,
        getStringAccept,
        fileListRef,
        prefixCls,
        typeCls,
      };
    },
  };
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-img-upload';

  .@{prefix-cls}-text {
    position: absolute;
    top: 4px;
    right: 10px;
    z-index: 20;

    :deep(.ant-upload-list) {
      display: none;
    }

    &.fullscreen {
      position: fixed;
      z-index: 10000;
    }
  }
</style>
