<template>
  <div>
    <footer class="footer" :style="footerStyle">中国石油新疆油田公司版权所有</footer>
  </div>
</template>
<script>
export default {
    data() {
        return {
            footerStyle: {
                backgroundColor: this.$store.getters.color
            }
        }
    },
    computed: {
        getColor() {
            return this.$store.getters.color
        }
    },
    watch: {
        getColor(val) {
            this.footerStyle = {
                backgroundColor: val
            }
        }
    },
  };
</script>
<style lang="less" scope>
.footer {
  height: 120px;
  line-height: 120px;
  text-align: center;
  // background: #990F0F;
  color: #ffffff;
}
</style>
