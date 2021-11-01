<template>
  <div>
    <div style="padding: 20px;margin: 0 auto;width: 960px;">
      <router-view v-mountedCallback="mountedCallback" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer';
// import SettingDrawer from '../components/SettingDrawer'
import NProgress from 'nprogress';
export default {
  components: {
    Footer,
  },
  props: ['name'],
  beforeCreate() {},
  methods: {
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
