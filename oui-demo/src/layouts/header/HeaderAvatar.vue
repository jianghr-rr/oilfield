<template>
  <o-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <o-avatar class="avatar" size="small" shape="circle" :src="user.avatar"/>
      <span class="name">{{user.name}}</span>
    </div>
    <o-menu :class="['avatar-menu']" slot="overlay">
      <o-menu-item @click="logout">
        <o-icon style="margin-right: 8px;" type="poweroff" />
        <span>退出登录</span>
      </o-menu-item>
    </o-menu>
  </o-dropdown>
</template>

<script>
import {mapGetters} from 'vuex'
import {logout} from '@/services/user'

export default {
  name: 'HeaderAvatar',
  computed: {
    ...mapGetters('account', ['user']),
  },
  methods: {
    logout() {
      logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
  .header-avatar{
    display: inline-flex;
    .avatar, .name{
      align-self: center;
    }
    .avatar{
      margin-right: 8px;
    }
    .name{
      font-weight: 500;
    }
  }
  .avatar-menu{
    width: 150px;
  }

</style>
