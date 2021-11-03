<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="间距关系" />
        <a-anchor-link href="#b" title="对齐方式" />
        <a-anchor-link href="#c" title="信息提示" />
        <a-anchor-link href="#d" title="过渡效果" />
      </a-anchor>
    </div>
    <div class="h1-title">设计原则</div>
    <div class="text">XinJiang Userty Design是为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案，对油田体系基础组件、特色业务组件进行规范梳理。</div>
    <div class="text-title"><span>统一: </span>以统一的布局、图标、设计样式规范等为相关系统提供基础框架。设计规范在一个页面、产品、甚至企业，起着整体形象的建设作用，特有的规范为企业提供统一的品牌效果，统一的视觉认知。</div>
    <div class="text-title"><span>高效: </span>通过相对统一的界面样式，为用户提供一致的认知暗示，使用户在一定操作时间内达到首要控制。统一的规范的界面设计可以帮助用户减少冗余思考，快速定位需求、识别、下一步反应。</div>
    <div class="text-title"><span>反馈: </span>用户决策后的操作完成，是否能得到一致并直观的操作反馈是决定用户体验是否良好甚至极佳的关键。给予用户操作建议或安全提示，通过界面样式和交互动效让用户可以清晰的感知自己的操作，页面元素的变化清晰地展现当前状态。</div>

    <div id="a" class="h2-title">间距关系</div>
    <div class="text">无论是布局中的模块与模块、元素与模块、还是元素与元素之间的间距通过一定的原则规范，对不同关联的内容区域，设置不同间距。间距越小，关联性越高，不同间距的控制，可以有效的在视觉上划分区域，达到用户快速分区分类的效果，让用户对页面结构和信息层次一目了然。</div>
    <div class="text-title"><span>横向间距关系: </span>为适应不同尺寸屏幕，排列采用栅格布局来排列所选组件，从而保证布局的灵活性与可用性。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img1" />
        <div class="img-title">横向间距示例</div>
      </div>
    </div>
    <div class="text-title"><span>纵向间距关系: </span>通过不同间距来划分信息层次结构，不适用的情况下可通过增加元素区分层次。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img2" />
        <div class="img-title">纵向间距示例</div>
      </div>
    </div>

    <div id="b" class="h2-title">对齐方式</div>
    <div class="text">界面中每一元素都应与界面中的某个内容存在某种联系，将不同元素进行排列对齐，符合用户的认知特性，进行视觉引导从而提升用户阅读体验。</div>
    <div class="text-title"><span>文本类对齐: </span>在页面内容设计时需要确定一个统一的视觉起点，来规范排列较短、较散的字段或段落。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img3" />
        <div class="img-title">建议示例</div>
      </div>
      <div>
        <img class="img" :src="img4" />
        <div class="img-title">非建议示例</div>
      </div>
    </div>
    <div class="text-title"><span>表单类对齐: </span>冒号对齐（右对齐），输入框内容以左对齐为主，能让用户将内容锁定在一定范围内，就能找到所有填写项，从而提高填写效率。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img5" />
        <div class="img-title">表单示例</div>
      </div>
    </div>
    <div class="text-title"><span>数字类对齐: </span>为了快速简便的运用数值，直观的对比数值大小，采用所有数值取相同有效位数的，并且右对齐的方式可以跟快速。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img6" />
        <div class="img-title">数字类示例</div>
      </div>
    </div>

    <div id="c" class="h2-title">信息提示</div>
    <div class="text">在整个操作流程中，用户基于信息（如：信息分区、信息分区）提示作出判断并操作，操作是主观的判断，当某一个操作任务完成后界面需要给予用户操作反馈（如：提示框、信息标注），使用户能主观感受到操作信息达到首要控制的体验效果。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img7" />
        <div class="img-title">信息分区</div>
      </div>
      <div>
        <img class="img" :src="img8" />
        <div class="img-title">信息分区</div>
      </div>
      <br/>
      <div>
        <img class="img" :src="img9" />
        <div class="img-title">提示框</div>
      </div>
      <div>
        <img class="img" :src="img10" />
        <div class="img-title">信息标注</div>
      </div>
    </div>
    <div id="d" class="h2-title">过渡效果</div>
    <div class="text">用户对系统操作，系统作出响应是控制感的基本体现之一。例如在对数据进行操作的过程中，由于数据增加，删除，导致内容重新排序。由于内容相似性过高，瞬间响应未打破用户的感知阀限，导致用户无法识别操作后内容的变化。此时过渡效果在用户体验中就显得尤为重要。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img11" />
        <div class="img-title">过渡示例</div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from '../../assets/guide/1.png';
import img2 from '../../assets/guide/2.png';
import img3 from '../../assets/guide/3.png';
import img4 from '../../assets/guide/4.png';
import img5 from '../../assets/guide/5.png';
import img6 from '../../assets/guide/6.png';
import img7 from '../../assets/guide/7.png';
import img8 from '../../assets/guide/8.png';
import img9 from '../../assets/guide/9.png';
import img10 from '../../assets/guide/10.png';
import img11 from '../../assets/guide/11.png';
export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
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
.text-title {
  .text-title-d();
}
.img-wrap {
  .img-wrap-d();
}
</style>
