<template>
  <div>
    <div style="padding: 20px;margin: 0 auto;width: 960px;">
      <router-view v-mountedCallback="mountedCallback" />
    </div>
    <Footer />
    <setting-drawer v-if="true"></setting-drawer>
  </div>
</template>

<script>
import Header from '../components/header';
import Footer from '../components/footer';
import SettingDrawer from '../components/SettingDrawer'
import NProgress from 'nprogress';
export default {
  components: {
    Header,
    SettingDrawer,
    Footer,
  },
  props: ['name'],
  beforeCreate() {},
  methods: {
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
      console.log('SettingDrawer:::', SettingDrawer);
    },
  },
};
</script>
