<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="用户体验要素" />
        <a-anchor-link href="#b" title="用户故事" />
        <a-anchor-link href="#c" title="六何法" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">用户体验要素</div>
    <div class="text">做产品非常有用的方法论，也是做好用户体验设计的前提。我们可以使用 Why-How-What 黄金圈法则，从内到外将问题拆分为一下三类: 为什么做？“我们为什么要开发这个产品？”(战略层)；做什么？“我们要开发的是什么？”(范围层)； 怎么做？“我们如何达到上述抽象层面所确定的问题？”(结构层、框架层、表现层)。</div>
    <div id="b" class="h2-title">用户故事</div>
    <div class="text">软件开发和项目管理中的常用。以日常语言或商务用语撰写句子，是一段简单的功能表述。以客户或使用者的观点撰写下有价值的功能、引导、框架来与使用者进行互动，进而推动工作进程，代表客户的需求与方向。以该用户故事来反应对象在组织内的其工作职责、范围、需要进行的任务等。 用户故事在敏捷开发方法中用来定义系统需要提供的功能和实现需求管理。这里可采用的模版形式多样，以5个W为例，可以更全面了解产品性能，“作为 （who 谁 ）（when 何时 ）（where 哪里），我 （want 想要 ）因为 （why 为什么 ）”。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img1" />
        <div class="img-title">用户故事地图</div>
      </div>
    </div>
    <div id="c" class="h2-title">六何法</div>
    <div class="text">六何法，又称“6W”分析法或“5W1H”，是一种思考方法，也可以说是一种创造技法。是对选定的项目、工序或操作，都要从原因（Why）、对象（What）、地点（Where）、时间（When）、人员（Who）、方法（How）等六个方面提出问题进行思考，可使思考的内容深化、科学化。由这六个疑问词所组成的问句，都不是是非题，而是需要一或多个事实佐证的应用题。有时“方法”不计在内，因为“方法”可以被“何事”、“何时”和“何地”描述，变成“五何法”。将六何法变成一种思考方式和流程，整理清晰就会是一个不错的产品，反之原本产品思路杂乱，用户更加混乱。</div>

  </div>
</template>
<script>
import img1 from '../../assets/guide-2/9.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img1,
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
  .img-wrap-d();
}
</style>
