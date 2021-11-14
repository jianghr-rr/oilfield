<template>
  <div class="common-layout">
    <page-header></page-header>
    <div class="content"><slot></slot></div>
    <page-footer :link-list="footerLinks" :copyright="copyright"></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/layouts/header/PageHeader';
import PageFooter from '@/layouts/footer/PageFooter'
import {mapState} from 'vuex'

export default {
  name: 'CommonLayout',
  components: {PageHeader, PageFooter},
  computed: {
    ...mapState('setting', ['footerLinks', 'copyright'])
  }
}
</script>

<style scoped lang="less">
.common-layout{
  min-width: 970px;
  height: 100vh;
  overflow: auto;
  // background-color: @layout-body-background;
  // background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
