<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="Xinjiang Userty Design 是什么" />
        <a-anchor-link href="#b" title="XJUD 的目标" />
      </a-anchor>
    </div>

    <div class="h1-title">间距关系</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
    };
  },
  computed: {
      getColor() {
        return this.$store.getters.color;
      },
  },
  watch: {
      getColor(val) {
        this.themmeColor = val;
      },
  },
};
</script>
<style lang="less" scope>
@import '../default.less';
.h1-title {
  .h1-title-d(var(--color));
}
.h2-title {
  .h2-title-d(var(--color));
}
.text {
  .text-d();
}
.img-wrap {
  text-align: center;
}
</style>
