<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="你们会提供 Sass/Stylus 等格式的样式文件吗？" />
        <a-anchor-link href="#b" title="当我点击 Select Dropdown DatePicker TimePicker Popover Popconfirm" />
        <a-anchor-link href="#c" title="Select Dropdown DatePicker TimePicker Popover Popconfirm 会跟随滚动条上下移动？" />
        <a-anchor-link href="#d" title="Form 表单不支持双向绑定，不能使用 v-model？" />
        <a-anchor-link href="#e" title="如何修改 Xinjiang Userty Design 的默认主题？" />
        <a-anchor-link href="#f" title="如何配置 webpack 以优化 momentjs 的打包大小？" />
        <a-anchor-link href="#g" title="当我动态改变 defaultValue，defaultOpenKeys，initialValue 等 defaultXxxx 的时候它并没有生效。" />
        <a-anchor-link href="#h" title="当我设置了 Input / Select 等的 value 时它就无法修改了。" />
        <a-anchor-link href="#i" title="Xinjiang Userty Design 覆盖了我的全局样式！" />
        <a-anchor-link href="#j" title="Xinjiang Userty Design 在移动端体验不佳。" />
      </a-anchor>
    </div>

    <div class="h1-title">常见问题</div>
    <div class="text">以下整理了一些 Xinjiang Userty Design 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。</div>
    <div id="a" class="h2-title">你们会提供 Sass/Stylus 等格式的样式文件吗？</div>
    <div class="text">不。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。</div>
    <div id="b" class="h2-title">当我点击 Select Dropdown DatePicker TimePicker Popover Popconfirm 内的另一个 popup 组件时它会失，如何解决？</div>
    <div class="text">使用  来在 Popover 中渲染组件，或者使用其他的 getXxxxContainer 参数。</div>
    <div id="c" class="h2-title">Select Dropdown DatePicker TimePicker Popover Popconfirm 会跟随滚动条上下移动？</div>
    <div class="text">使用  来将组件渲染到滚动区域内，或者使用其他的 getXxxxContainer 参数。</div>
    <div id="d" class="h2-title">Form 表单不支持双向绑定，不能使用 v-model？</div>
    <div class="text">第一、我们不推荐在 Form 中使用双向绑定，同一份数据可能在多处使用，如果使用双向绑定，那么数据的修改会同时同步到各个组件，但这并不是我们想要的， 你应该在表单提交成功或失败或确认时同步数据，使用非双向绑定的表单，你会拥有最大限度的控制数据修改/同步的权限。</div>
    <div class="text">第二、如果你不使用表单的自动校验/收集功能，即没有使用 v-decorator 修饰过得组件，你依然可以使用 v-model。</div>
    <div id="e" class="h2-title">如何修改 Xinjiang Userty Design 的默认主题？</div>
    <div class="text">参考定制主题</div>
    <div id="f" class="h2-title">如何配置 webpack 以优化 momentjs 的打包大小？</div>
    <div class="text">参考：https://github.com/jmblog/how-to-optimize-momentjs-with-webpack 。</div>
    <div id="g" class="h2-title">当我动态改变 defaultValue，defaultOpenKeys，initialValue 等 defaultXxxx 的时候它并没有生效。</div>
    <div class="text">Input/Select 等的 defaultXxxx（例如 defaultValue ）只有在组件第一次渲染的时候有效，此特性参考自React。切记：第一次、第一次、第一次...</div>
    <div id="h" class="h2-title">当我设置了 Input / Select 等的 value 时它就无法修改了。</div>
    <div class="text">尝试使用 defaultValue 或 change 或 v-model 来改变 value。</div>
    <div id="i" class="h2-title">Xinjiang Userty Design 覆盖了我的全局样式！</div>
    <div class="text">是的，Xinjiang Userty Design 在设计的时候就是用来开发一个完整的应用的，为了方便，我们覆盖了一些全局样式，现在还不能移除，想要了解更多请追踪这个 issue：https://github.com/ant-design/ant-design/issues/4331 ，或者参考发布内容。</div>
    <div id="j" class="h2-title">Xinjiang Userty Design 在移动端体验不佳。</div>
    <div class="text">Xinjiang Userty Design 并非针对移动端设计。</div>
  </div>
</template>
<script>
import welcome from '../../assets/guide/welcome.png';
export default {
  data() {
    return {
      welcome,
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
.img-wrap {
  text-align: center;
}
</style>
