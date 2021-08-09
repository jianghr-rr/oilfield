<template>
  <div class="page-wraper">
    <Header />
    <router-view v-mountedCallback="mountedCallback" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/hompageHeader';
import Footer from '../components/footer';
import NProgress from 'nprogress';

export default {
    components: {
        Header,
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

<style scope>
.page-wraper {
  width: auto;
  min-width: 1280px;
}
</style>
