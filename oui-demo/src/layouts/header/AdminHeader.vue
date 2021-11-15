<template>
  <o-layout-header :class="[headerTheme, 'admin-header']">
    <div :class="['admin-header-wide', layout, pageWidth]">
      <div class="admin-header-left">
        <img width="32" src="@/assets/img/logo.png" />
        <h1 :style="{color}">{{systemName}}</h1>
      </div>
      <div :class="['admin-header-right', headerTheme]">
          <header-avatar class="header-item"/>
      </div>
    </div>
  </o-layout-header>
</template>

<script>
import HeaderAvatar from './HeaderAvatar'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'AdminHeader',
  components: {HeaderAvatar},
  props: ['collapsed', 'menuData'],
  data() {
    return {
      searchActive: false
    }
  },
  computed: {
    ...mapState('setting', ['theme', 'isMobile', 'layout', 'systemName', 'lang', 'pageWidth']),
    ...mapState({
        color: state => state.setting.theme.color
    }),
    headerTheme () {
      if (this.layout == 'side' && this.theme.mode == 'dark' && !this.isMobile) {
        return 'light'
      }
      return this.theme.mode
    },
    menuWidth() {
      const {layout, searchActive} = this
      const headWidth = layout === 'head' ? '100% - 188px' : '100%'
      const extraWidth = searchActive ? '600px' : '400px'
      return `calc(${headWidth} - ${extraWidth})`
    }
  },
  methods: {
    toggleCollapse () {
      this.$emit('toggleCollapse')
    },
    ...mapMutations('setting', ['setLang'])
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
