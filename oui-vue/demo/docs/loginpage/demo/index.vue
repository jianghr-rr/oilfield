<template>
    <div>
        <md :cn="md.cn" :us="md.us" />
        <basic-md />
        <account-md />
        <register-md />
        <tab-md />
    </div>
</template>

<script>
import BasicMd from './basic.md';
import AccountMd from './account.md';
import RegisterMd from './register.md';
import TabMd from './tab.md';

const md = {
  cn: `# Login Page 登录页
          ## 代码演示`,
  us: '# Login Page'
};

export default {
    name: 'LoginPageMain',
    components: {
        BasicMd,
        AccountMd,
        RegisterMd,
        TabMd
    },
    data() {
        return {
            md
        }
    }
};
</script>
