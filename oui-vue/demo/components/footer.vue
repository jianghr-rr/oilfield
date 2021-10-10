<template>
  <div>
    <footer class="footer" :style="footerStyle">备案号: 京 XJ Userty Design 备 20210726 号</footer>
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