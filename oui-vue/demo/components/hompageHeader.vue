<template>
    <div id="header" class="header">
        <div class="header-left">
            <img class="header-left-img" :src="logo" />
            <span>XinJiang Userty Design</span>
        </div>
        <div class="header-right">
            <router-link class="nav-link guide" to="/homepage/guide">
                指南
            </router-link>
            <router-link class="nav-link theme" to="/homepage/theme">
                主题
            </router-link>
            <router-link class="nav-link component" to="/vue/introduce-cn">
                组件
            </router-link>
            <router-link class="nav-link resource" to="/homepage/resource">
                设计资源
            </router-link>
        </div>
    </div>
</template>

<script>
import logo from '../assets/logo.png';
export default {
    props: ['homepage-header'],
    data() {
        return {
            logo: logo
        }
    },
    mounted() {
        // console.log(this.logo);
    },
    methods: {
    },
};
</script>

<style lang="less" scope>
.header {
    height: 88px;
    display: flex;
    align-items: center;
    padding: 0 24px;
}
.header-left {
    display: flex;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        margin: 0 20px 0 0;
    }
    font-size: 20px;
    font-family: "Source Han Sans CN";
    font-weight: 500;
    color: #990F0F;
}
.header-right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        height: 86px;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: "Source Han Sans CN";
        font-weight: 400;
        color: #333333;
        padding: 0 35px;
        border-bottom: 2px solid #FFFFFF;
        &:hover {
            color: #990F0F;
        }
    }
    .router-link-active {
        color: #990F0F;
        border-bottom: 2px solid #990F0F;
    }
}
</style>
