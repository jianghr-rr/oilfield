<script>
import One from './one';
import Tow from './two';
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
            <a-anchor-link href="#a" title="特性" />
            <a-anchor-link href="#b" title="支持环境" />
            <a-anchor-link href="#c" title="版本" />
            <a-anchor-link href="#d" title="安装" />
          </a-anchor>
        </div>

        <div class="h1-title">发布内容</div>
        <div class="text">这里是 Xinjiang Userty Design 的 Vue 实现，开发和服务于企业级后台产品。</div>
        <div id="a" class="h2-title">特性</div>
        <div class="text">
          提炼自企业级中后台产品的交互语言和视觉风格。<br/>
          开箱即用的高质量 Vue 组件。<br/>
          共享 Xinjiang Userty Design of react 设计工具体系
        </div>
        <div id="b" class="h2-title">支持环境</div>
        <div class="text">
          现代浏览器和 IE9 及以上（需要 polyfills)<br/>
          支持服务端渲染
        </div>
        <div id="c" class="h2-title">版本</div>
        <div class="text">基础版：1.0.0</div>
        <div id="d" class="h2-title">安装</div>
        <div class="text">使用 npm 或 yarn 安装</div>
        <div class="text">我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</div>
        <One />
        <Tow />
        <div class="text">如果你的网络环境不佳，推荐使用 cnpm</div>
        <div id="d" class="h2-title">网站说明</div>
        <div class="text">本网站内容设计原则部分由开发团队就界面设计、用户体验等知识作相关参考，因内容涉及知识面广，没有一一标明出处，目前仅供公司内部学习使用。后期如有开源计划，会一一追加参考文献出处，特此说明。</div>
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
.text {
  .text-d();
}
.link {
  .link-d();
}
</style>
