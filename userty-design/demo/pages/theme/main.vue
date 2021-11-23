<script>
import P1 from '../../assets/theme/1.png';
import One from './one';
import Tow from './two';
import Three from './three';
// import Four from './four';
// import Five from './five';
// import Six from './six';
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
  render() {
    return (
      <div style={`--color: ${this.themmeColor}`}>
        <div class="toc-affix">
          <a-anchor>
            <a-anchor-link href="#a" title="Xinjiang Userty Design 的样式变量" />
            <a-anchor-link href="#b" title="定制方式" />
            <a-anchor-link href="#c" title="没有生效？" />
            <a-anchor-link href="#d" title="使用暗黑主题" />
          </a-anchor>
        </div>

        <div class="h1-title">定制主题</div>
        <div class="text">Xinjiang Userty Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。</div>
        <div class="img-wrap">
          <div>
            <img class="img" src={P1} />
            <div class="img-title">主题展示</div>
          </div>
        </div>
        <div id="a" class="h2-title">Xinjiang Userty Design 的样式变量</div>
        <div class="text">
          Xinjiang Userty Design 的样式使用了 <span class='i'>Less</span> 作为作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。 以下是一些最常用的通用变量，所有样式变量可以在 <span class="i2">这里</span> 找到
        </div>
        <One />
        <div class="text">如果以上变量不能满足你的定制需求，可以给我们提 issue。</div>
        <div id="b" class="h2-title">定制方式</div>
        <div class="text">我们使用 <span class='i'>modifyVars</span> 的方式来进行覆盖变量。下面将针对不同的场景提供一些常用的定制方式。</div>
        <div class="h3-title">在 webpack 中定制主题</div>
        <div class="text">我们以 <span class='i'>webpack@4</span> 为例进行说明，以下是一个 <span class='i-b'>webpack.config.js</span> 的典型例子，对 <span class='i'>less-loader</span> 的 options 属性进行相应配置。</div>
        <Tow />
        <div class="text">注意 less-loader 的处理范围不要过滤掉 <span class='i-b'>node_modules</span> 下的 antd 包。</div>
        <div class="h3-title">配置 less 变量文件</div>
        <div class="text">另外一种方式是建立一个单独的 <span class="i">less</span> 变量文件，引入这个文件覆盖 <span class='i-b'>usertyd.less</span> 里的变量。</div>
        <Three />
        <div id="c" class="h2-title">没有生效？</div>
        <div class="text">注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。</div>
        <div class="text">
          如果你在使用 <span class="i">babel-plugin-import</span> 的 <span class='i-b'>style</span> 配置来引入样式，需要将配置值从 <span class='i-b'>'css'</span> 改为 <span class='i-b'>true</span>，这样会引入 less 文件。<br />
          如果你是通过 <span class='i-b'>'userty-design/dist/usertyd.css'</span> 引入样式的，改为 <span class='i-b'>userty-design/dist/usertyd.less</span>。
        </div>
      </div>
    );
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
.h3-title{
  .h3-title-d(var(--color));
}
.text {
  .text-d();
}
.link {
  .link-d();
}
.img-wrap {
  .img-wrap-d();
}
</style>
