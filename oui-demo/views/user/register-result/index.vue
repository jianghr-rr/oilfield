<template>
  <div class="registerResult">
    <div>
      {{ $t('userandregister-result.register-result.msg', { email: account }) }}
    </div>
    <div>
      {{ $t('userandregister-result.register-result.activation-email') }}
    </div>
    <div class="actions">
      <!-- <a href="">
        <o-button size="large" type="primary">
          {{ $t('userandregister-result.register-result.view-mailbox') }}
        </o-button>
      </a> -->
      <router-link to="/">
        <o-button size="large">
          {{ $t('userandregister-result.register-result.back-home') }}
        </o-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
    };
  },
  created() {
    this.account = this.$route.query.account;
  },
};
</script>

<style scoped lang="less">
.registerResult {
  width: 800px;
  min-height: 400px;
  margin: auto;
  padding: 80px;
  background: none;
  /deep/ .anticon {
    font-size: 64px;
  }
  .title {
    margin-top: 32px;
    font-size: 20px;
    line-height: 28px;
  }
  .actions {
    margin-top: 40px;
    a + a {
      margin-left: 8px;
    }
  }
}
</style>
