<template>
  <div>
    <div class="img-wrap"><img class="img" :src="welcome" /></div>
  </div>
</template>
<script>
import welcome from '../../assets/theme/3.jpg';
export default {
  data() {
    return {
      welcome,
    };
  },
};
</script>
<style lang="less" scope>
.img-wrap {
  text-align: center;
}
</style>
