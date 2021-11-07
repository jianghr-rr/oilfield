<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import themeUtil from '@/utils/themeUtil';

export default {
  name: 'App',
  computed: {
      ...mapState({
          theme: state => {
              return state.app.theme
          }
      })
  },
  methods: {
      // TODO
      handleChangeTheme() {
          // console.log(this.theme.color, this.theme.mode);
          themeUtil.changeThemeColor('#eb2f96', 'light').then(() => {
              console.log('changed: ', '#eb2f96', 'light');
          });
      }
  }
}
</script>

<style lang="less">
  #app{
    min-width: 970px;
    min-height: 100vh;
  }
</style>
