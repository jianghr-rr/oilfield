<template>
  <div>
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#in-1" title="间距关系" />
        <a-anchor-link href="#in-2" title="对齐方式" />
        <a-anchor-link href="#in-3" title="信息提示" />
        <a-anchor-link href="#in-4" title="过渡效果" />
      </a-anchor>
    </div>
    <div>
      <p class="title-h1">设计原则</p>
      <p class="p-content">XinJiang Userty Design是为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案，对油田体系基础组件、特色业务组件进行规范梳理。</p>
      <p class="p-content">以统一的布局、图标、设计样式规范等为相关系统提供基础框架。设计规范在一个页面、产品、甚至企业，起着整体形象的建设作用，特有的规范为企业提供统一的品牌效果，统一的视觉认知。</p>
      <p class="p-content">通过相对统一的界面样式，为用户提供一致的认知暗示，使用户在一定操作时间内达到首要控制。统一的规范的界面设计可以帮助用户减少冗余思考，快速定位需求、识别、下一步反应。</p>
      <p class="p-content">用户决策后的操作完成，是否能得到一致并直观的操作反馈是决定用户体验是否良好甚至极佳的关键。给予用户操作建议或安全提示，通过界面样式和交互动效让用户可以清晰的感知自己的操作，页面元素的变化清晰地展现当前状态。</p>
    </div>
    <div id="in-1">
      <p class="title-h2">间距关系</p>
      <p class="p-content">无论是布局中的模块与模块、元素与模块、还是元素与元素之间的间距通过一定的原则规范，对不同关联的内容区域，设置不同间距。间距越小，关联性越高，不同间距的控制，可以有效的在视觉上划分区域，达到用户快速分区分类的效果，让用户对页面结构和信息层次一目了然。</p>
      <p class="p-content">为适应不同尺寸屏幕，排列采用栅格布局来排列所选组件，从而保证布局的灵活性与可用性。</p>
      <p class="p-content">通过不同间距来划分信息层次结构，不适用的情况下可通过增加元素区分层次。</p>
    </div>
    <div id="in-2">
      <p class="title-h2">对齐方式</p>
      <p class="p-content">界面中每一元素都应与界面中的某个内容存在某种联系，将不同元素进行排列对齐，符合用户的认知特性，进行视觉引导从而提升用户阅读体验。</p>
      <p class="p-content">在页面内容设计时需要确定一个统一的视觉起点，来规范排列较短、较散的字段或段落。</p>
      <p class="p-content">冒号对齐（右对齐），输入框内容以左对齐为主，能让用户将内容锁定在一定范围内，就能找到所有填写项，从而提高填写效率。</p>
      <p class="p-content">为了快速简便的运用数值，直观的对比数值大小，采用所有数值取相同有效位数的，并且右对齐的方式可以跟快速。</p>
    </div>
    <div id="in-3">
      <p class="title-h2">信息提示</p>
      <p class="p-content">在整个操作流程中，用户基于信息（如：信息分区、悬停展示）提示作出判断并操作，操作是主观的判断，当某一个操作任务完成后界面需要给予用户操作反馈（如：提示框、信息标注），使用户能主观感受到操作信息达到首要控制的体验效果。</p>
    </div>
    <div id="in-4">
      <p class="title-h2">过渡效果</p>
      <p class="p-content">用户对系统操作，系统作出响应是控制感的基本体现之一。例如在对数据进行操作的过程中，由于数据增加，删除，导致内容重新排序。由于内容相似性过高，瞬间响应未打破用户的感知阀限，导致用户无法识别操作后内容的变化。此时过渡效果在用户体验中就显得尤为重要。</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scope>
.title-h1 {
  margin: 0 0 50px 0;
  height: 24px;
  font-size: 24px;
  font-family: 'Source Han Sans CN';
  font-weight: 400;
  // color: #990F0F;
  line-height: 24px;
}
.title-h2 {
  margin: 0 0 40px 0;
  height: 18px;
  font-size: 18px;
  font-family: 'Source Han Sans CN';
  font-weight: 400;
  // color: #990F0F;
  line-height: 18px;
}
.p-content {
  margin: 0 0 40px 0;
  font-size: 16px;
  font-family: 'Source Han Sans CN';
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}
</style>