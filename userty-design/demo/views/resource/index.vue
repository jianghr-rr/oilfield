<template>
  <div class="layout">
    <router-view v-mountedCallback="mountedCallback" />
  </div>
</template>
<script>

export default {
};
</script>
<style lang="less" scope>
  .layout {
    padding: 40px 0;
    display: flex;
  }
</style>
