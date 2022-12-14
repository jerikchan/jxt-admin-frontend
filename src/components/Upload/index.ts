import { withInstall } from '/@/utils';
import basicUpload from './src/BasicUpload.vue';
import imgUpload from './src/ImgUpload.vue';

export const BasicUpload = withInstall(basicUpload);
export const ImgUpload = withInstall(imgUpload);
