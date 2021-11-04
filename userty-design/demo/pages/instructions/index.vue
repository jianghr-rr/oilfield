<script>
import Basic from './basic';
import Tow from './two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
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
            <a-anchor-link href="#a" title="1. 安装脚手架工具" />
            <a-anchor-link href="#b" title="2. 创建一个项目" />
            <a-anchor-link href="#c" title="3. 使用组件" />
          </a-anchor>
        </div>

        <div class="h1-title">使用说明</div>
        <div class="text">Xinjiang Userty Design Vue 致力于提供给程序员愉悦的开发体验。</div>
        <div id="b" class="h2-title">引入 Xinjiang Userty Design-vue</div>
        <div class="text" id="a">1. 安装脚手架工具</div>
        <div class="link">vue-cli</div>
        <Basic/>
        <div class="text" id="b">2. 创建一个项目</div>
        <div class="text">使用命令行进行初始化</div>
        <Tow />
        <div class="text">并配置项目。</div>
        <div class="text">若安装缓慢报错，可尝试用cnpm 或别的镜像源自行安装：rm -rf node_modules && cnpm install 。</div>
        <div class="text" id="c">3. 使用组件</div>
        <Three />
        <div class="text">完整引入</div>
        <Four />
        <div class="text">以上代码便完成了 Userty Design 的引入。需要注意的是，样式文件需要单独引入。</div>
        <div class="text">局部导入组件</div>
        <Five />
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
