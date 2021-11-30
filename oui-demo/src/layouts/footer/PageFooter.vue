<template>
  <div class="footer" :style="{background: color}">
      中国石油新疆油田公司版权所有
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'PageFooter',
  props: ['copyright', 'linkList'],
  computed: {
       ...mapState({
          color: state => state.setting.theme.color
      })
  }
}
</script>

<style lang="less" scoped>
  .footer{
    height: 120px;
    line-height: 120px;
    text-align: center;
    color: #ffffff;
  }
</style>
