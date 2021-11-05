<template>
  <div :style="{'--color': themmeColor}">
    <div class="img-wrap">
      <div>
        <img class="img" :src="p2" />
      </div>
    </div>
  </div>
</template>
<script>
import p2 from '../../assets/theme/2.png';
export default {
  data() {
    return {
      p2,
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
