<template>
  <PageWrapper title="用户详情" contentBackground @back="goBack">
    <!-- <template #extra>
      <a-button type="primary" danger> 禁用账号 </a-button>
      <a-button type="primary"> 修改密码 </a-button>
    </template> -->
    <template #footer>
      <a-tabs default-active-key="detail" v-model:activeKey="currentKey">
        <a-tab-pane key="detail" tab="用户详情" />
        <!-- <a-tab-pane key="logs" tab="操作日志" /> -->
      </a-tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'detail'">
        <!-- <div v-for="i in 10" :key="i">这是用户{{ userId }}资料Tab</div> -->
        <Description
          size="middle"
          title="个人信息"
          :bordered="true"
          :column="3"
          :data="userInfo"
          :schema="accountDetailSchema"
        />
      </template>
      <!-- <template v-if="currentKey == 'logs'">
        <div v-for="i in 10" :key="i">这是用户{{ userId }}操作日志Tab</div>
      </template> -->
    </div>
  </PageWrapper>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  // import { useTabs } from '/@/hooks/web/useTabs';
  import { Tabs } from 'ant-design-vue';
  // import { getAccountDetail } from '/@/api/admin/system';
  import { accountDetailSchema } from './account.data';
  import { Description } from '/@/components/Description/index';

  export default defineComponent({
    name: 'AccountDetail',
    components: { PageWrapper, ATabs: Tabs, ATabPane: Tabs.TabPane, Description },
    setup() {
      const route = useRoute();
      const go = useGo();
      // 此处可以得到用户ID
      const userId = ref(route.params?.id);
      const currentKey = ref('detail');
      // const { setTitle } = useTabs();
      const userInfo = ref({});
      // TODO
      // 本页代码仅作演示，实际应当通过userId从接口获得用户的相关资料

      // 设置Tab的标题（不会影响页面标题）
      // setTitle('详情：用户' + userId.value);

      onMounted(async () => {
        // userInfo.value = await getAccountDetail({ id: userId.value });
      });

      // 页面左侧点击返回链接时的操作
      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/system/account');
      }
      return { userId, currentKey, goBack, userInfo, accountDetailSchema };
    },
  });
</script>

<style></style>
