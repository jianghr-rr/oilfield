<template>
  <div class="resource-wrap">
    <div class="title">让交互设计更规范</div>
    <div class="sub-title"><span>专业</span><span>便捷</span><span>简单</span></div>
    <a class="download-btn" href="http://11.71.3.110:30005/public-doc/shared/Axure%E8%AE%BE%E8%AE%A1%E8%B5%84%E6%BA%90%E5%8C%85.zip" target="_blank">
      <img class="img" :src="download" />
    </a>
    <div class="img-1">
      <img :src="resource1" />
      <p>Axure 组件库使用教程</p>
    </div>
    <img :src="resource2" />
    <img :src="resource3" />
    <!-- <div class="img-wrap"><img class="img" :src="welcome" /></div> -->
  </div>
</template>
<script>
import download from '../../assets/image/download.png';
import resource1 from '../../assets/image/resource-1.png';
import resource2 from '../../assets/image/resource-2.png';
import resource3 from '../../assets/image/resource-3.png';
export default {
  data() {
    return {
      download,
      resource1,
      resource2,
      resource3,
    };
  },
};
</script>
<style lang="less" scope>
.resource-wrap {
  width: 100%;
  text-align: center;
  .title {
    margin: 80px auto 34px 0;
    text-align: center;
    height: 37px;
    font-size: 38px;
    font-family: 'Source Han Sans CN';
    font-weight: 400;
    color: #990F0F;
    line-height: 40px;
  }
  .sub-title {
    span {
      font-size: 26px;
      font-family: 'Source Han Sans CN';
      font-weight: 400;
      color: #990F0F;
      line-height: 26px;
      margin: 0 23px;
    }
  }
  .download-btn {
    display: block;
    width: 160px;
    height: 60px;
    margin: 54px auto 0 auto;
    position: relative;
    img {
      position: absolute;
      width: 160px;
      height: 60px;
      left: 0;
      top: 0;
      animation: breathe 4s infinite;
    }
  }

  .img-1 {
    position: relative;
    width: 100%;
    margin: 0 0 80px 0;
    img {
      width: 100%;
    }
    p {
      width: 100%;
      text-align: center;
      position: absolute;
      height: 27px;
      font-size: 28px;
      font-family: 'Source Han Sans CN';
      font-weight: 400;
      color: #FFFFFF;
      bottom: 60px;
    }
  }
}


@keyframes breathe {
    0% {
        transform: scale(0.9);
        opacity: .8;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.9);
        opacity: .8;
    }
}
</style>
