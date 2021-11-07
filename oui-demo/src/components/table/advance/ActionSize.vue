<template>
  <div class="action-size" ref="root">
    <o-tooltip title="密度">
      <o-dropdown placement="bottomCenter" :trigger="['click']" :get-popup-container="() => $refs.root">
        <o-icon class="action" type="column-height" />
        <o-menu :selected-keys="[value]" slot="overlay" @click="onClick">
          <o-menu-item key="default">
            默认
          </o-menu-item>
          <o-menu-item key="middle">
            中等
          </o-menu-item>
          <o-menu-item key="small">
            紧密
          </o-menu-item>
        </o-menu>
      </o-dropdown>
    </o-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'ActionSize',
    props: ['value'],
    inject: ['table'],
    data() {
      return {
        selectedKeys: ['middle']
      }
    },
    methods: {
      onClick({key}) {
        this.$emit('input', key)
      }
    }
  }
</script>

<style scoped lang="less">
.action-size{
  display: inline-block;
}
</style>