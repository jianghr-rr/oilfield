<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="01 色值标准" />
        <a-anchor-link href="#b" title="02 字体标准" />
        <a-anchor-link href="#c" title="03 图标设计" />
        <a-anchor-link href="#d" title="04 按钮设计" />
        <a-anchor-link href="#e" title="05 反馈设计" />
        <a-anchor-link href="#f" title="06 页面布局" />
      </a-anchor>
    </div>

    <div class="h1-title">设计规范</div>
    <div class="text">组件库本身的设计提出建立在用户体验的提升上。用户在使用产品的过程中所产生的最主观的感受，其中包括情感，行为，认知，心里和生理上的反应。一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户体验设计、用户界面设计分配的内容不同，导致不同的设计师依据个人的设计思路及风格推进，造成用户困惑降低用户体验，根据本设计规范予以初步规范。对于较大型的产品，设计规范定义基本的元素，可以帮助众多设计师或多个项目一起做出有统一性的产品，从而初步提升用户体验。 </div>

    <div id="a" class="h2-title">01 色值标准</div>
    <div class="text">颜色不仅仅用来传达品牌调性，更多的是用来传达反馈信息、突出层级、表明状态。此次设计以“中国石油”Logo中的红橙黄为基础色，红色在网站设计中应用适当，会给人带来兴奋积极的感觉。通过H(色相)，S（饱和度），B（明度）三个数值来量化色彩，在原有色彩上降低明度，调整饱和度实现理性配色。秉承原有Logo的色彩体系，扩展相应的色相，为系统提供多种色彩选择。主要分为：主导色、点缀色、功能色、中性色、扩展色。</div>
    <div class="text-title"><span>主导色: </span>小面积使用，用于需要强调的和突出的文字、按钮和图标；重要级文字信息。（色阶为不同状态下使用提供选择）</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s1" />
      </div>
    </div>
    <div class="text-title"><span>点缀色: </span>用于需要信息提示文字、按钮和图标。内容区域装饰。（色阶为不同状态下使用提供选择）</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s2" />
      </div>
    </div>
    <div class="text-title"><span>功能色: </span>用于明确信息以及状态，比如成功、警告、提示等。（色阶为不同状态下使用提供选择）</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s3" />
      </div>
    </div> <div class="img-wrap">
      <div>
        <img class="img" :src="s4" />
      </div>
    </div> <div class="img-wrap">
      <div>
        <img class="img" :src="s5" />
      </div>
    </div>
    <div class="text-title"><span>中性色: </span>用于在界面的文字部分，同时常用于文本、背景、边框、阴影等，可以体现出界面的层次结构。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s6" />
      </div>
    </div>
    <div class="text-title"><span>拓展色: </span>如果以上色板不能满足用户需求，可以选择以下主色，色彩生成算法将会为你生成完整的色板。（色阶为不同状态下使用提供选择）</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s7" />
      </div>
    </div> <div class="img-wrap">
      <div>
        <img class="img" :src="s8" />
      </div>
    </div> <div class="img-wrap">
      <div>
        <img class="img" :src="s9" />
      </div>
    </div>
    <div id="b" class="h2-title">02 字体标准</div>
    <div class="text">字体是体系化界面设计中最基本的构成之一。用户可以通过文本来理解内容和完成工作，统一标准的字体系统将大大提升用户的阅读体验及工作效率。建议在设计时参考下面的字体规范与尺寸，中英文字体：思源黑体，此字体样式既传统又现代。在 Xinjiang Userty Design 的视觉体系中，我们建议的主要字体为14，与之对应的行高为26。其余的字阶的选择可根据具体情况进行自由的定义。在此建议在一个系统设计中，字号的选择尽量控制在3-5种之间，保持克制的原则。</div>
    <div class="text">在使用字体时，思源黑体字体族中的字体类型由细到粗分为ExtraLight、Light、Normal、Regular、Medium等，在 Xinjiang Userty Design 中，所用到的字体类型都有一定使用规范。在此建议在一个系统设计中，字体类型的选载尽量控制在2-3种之间，保持克制原则。</div>
    <div id="c" class="h2-title">03 图标设计</div>
    <div class="text">图标是 UI 设计中不可或缺的部分。通常我们理解图标设计是将某个概念转换成清晰易读的图形，从而使用户可以快速理解。因为使用场景与位置不同，因此图标的尺寸也会有相应规范进行使用与标注。在Xinjiang Userty Design中，将图标设计为四个尺寸，分别为特大图标、大图标、中图标和小图标，给用户提供更多的使用便捷。</div>
    <div class="text-title"><span>内容区域: </span>内容应该保持在活动区域以内，如有必要，内容可以延展至修饰区域之中，但不能超出。</div>
    <div class="img-wrap">
      <div>
        <!-- <img class="img" :src="s12" /> -->
        <div class="img-title">左图中红色面积为内容区域</div>
      </div>
      <div>
        <img class="img" :src="s13" />
        <div class="img-title">右图中红色面积为修饰区域</div>
      </div>
    </div>
    <div class="text-title"><span>特大图标: </span>图标尺寸为 50×50px ，建议使用场景为页面主标识等。</div>
    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s14" /></div>
      <div class="img-title">
        矩形圆角为 0.35px 三角形圆角为 0.6px 转折内角为 0.45px<br/>
        线条填充颜色 # 555555<br/>
        斜线保证视觉效果近似横竖线，注意保持整体视觉感受大小一致
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s15" /></div>
      <div class="img-title">
        图形填充颜色 # 990F0F
      </div>
    </div>
    <div class="text-title"><span>大图标: </span>图标尺寸为 40×40px ，建议使用场景为顶部导航、底部导航、Icon图标展示等。</div>

    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s16" /></div>
      <div class="img-title">
        矩形圆角为 0.35px 三角形圆角为 0.6px 转折内角为 0.45px<br/>
        线条填充颜色 # 555555<br/>
        斜线保证视觉效果近似横竖线，注意保持整体视觉感受大小一致
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s17" /></div>
      <div class="img-title">
        图形填充颜色 # 990F0F
      </div>
    </div>
    <div class="text-title"><span>中图标: </span>图标尺寸为 30×30px ，建议使用场景为搜索、按钮展示等。</div>

    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s18" /></div>
      <div class="img-title">
        矩形圆角为 0.35px 三角形圆角为 0.6px 转折内角为 0.45px<br/>
        线条填充颜色 # 555555<br/>
        斜线保证视觉效果近似横竖线，注意保持整体视觉感受大小一致
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s19" /></div>
      <div class="img-title">
        图形填充颜色 # 990F0F
      </div>
    </div>
    <div class="text-title"><span>小图标: </span>图标尺寸为 20×20px ，建议使用场景为文字排版密集区域、指示用户操作信息等。</div>

    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s20" /></div>
      <div class="img-title">
        矩形圆角为 0.35px 三角形圆角为 0.6px 转折内角为 0.45px<br/>
        线条填充颜色 # 555555<br/>
        斜线保证视觉效果近似横竖线，注意保持整体视觉感受大小一致
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="img-conter"><img class="img" :src="s21" /></div>
      <div class="img-title">
        图形填充颜色 # 990F0F
      </div>
    </div>
    <div id="d" class="h2-title">04 按钮设计</div>
    <div class="text">按钮在 Xinjiang Userty Design中不可或缺的部分。在Xinjiang Userty Design中，将按钮</div>
    <div class="text-title"><span>重要按钮: </span>执行重要操作的按钮，长度根据页面具体情况而定。</div>
    <div class="img-clo-wrap">
      <div class="title">默认状态</div>
      <div class="img-conter"><img class="img" :src="s22" /></div>
      <div class="img-title">
        左边按钮圆角为4px      右边按钮圆角为18px<br/>
        填充颜色 # 0043B5<br/>
        文字颜色 # FFFFFF        文字：上下左右居中
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">不可点击</div>
      <div class="img-conter"><img class="img" :src="s23" /></div>
      <div class="img-title">
        左边按钮圆角为4px      右边按钮圆角为18px<br/>
        填充颜色 # FAFAFA       描边颜色 #D7D7D7<br/>
        文字颜色 # AAAAAA       文字：上下左右居中<br/>
      </div>
    </div>
    <div class="text-title"><span>一般按钮: </span>执行非常规操作的按钮，长度根据页面具体情况而定。</div>
    <div class="img-clo-wrap">
      <div class="title">默认状态</div>
      <div class="img-conter"><img class="img" :src="s24" /></div>
      <div class="img-title">
        左边按钮圆角为4px      右边按钮圆角为18px<br/>
        填充颜色 # FFFFFF       描边颜色 #  D7D7D7 <br/>
        文字颜色 # 333333        文字：上下左右居中
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">不可点击</div>
      <div class="img-conter"><img class="img" :src="s25" /></div>
      <div class="img-title">
        左边按钮圆角为4px      右边按钮圆角为18px<br/>
        填充颜色 # FFFFFF       描边颜色 #  D7D7D7 <br/>
        文字颜色 # D7D7D7        文字：上下左右居中
      </div>
    </div>
    <div id="e" class="h2-title">05 反馈设计</div>
    <div class="text">在 Xinjiang Userty Design中不同组件都可能进行交互，并在交互时会产生三种不同效果，使用户在使用时可以更加</div>
    <div class="text-title"><span>目录反馈: </span>在浏览目录时的反馈交互分为默认状态、鼠标悬浮状态、点击状态这三种状态。</div>
    <div class="img-clo-wrap">
      <div class="title">默认状态</div>
      <div class="img-conter"><img class="img" :src="s26" /></div>
      <div class="img-title">
        默认状态<br />
        目录名称颜色 #555555
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">鼠标悬浮</div>
      <div class="img-conter"><img class="img" :src="s27" /></div>
      <div class="img-title">
        鼠标悬浮状态<br/>
        目录名称颜色 #990F0F
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">点击状态</div>
      <div class="img-conter"><img class="img" :src="s28" /></div>
      <div class="img-title">
        点击状态<br />
        目录名称颜色 #990F0F<br />
        填充颜色 #990F0F-透明度10%（#F1E6E6）
      </div>
    </div>
    <div class="text-title"><span>按钮反馈: </span>在使用按钮时的反馈交互分为默认状态、鼠标悬浮状态、点击状态这三种状态，并且重要按钮与一般按钮的反馈交互也有不同。</div>
    <div class="img-clo-wrap">
      <div class="title">默认状态</div>
      <div class="img-conter"><img class="img" :src="s29" /></div>
      <div class="img-title">
        默认状态<br />
        目录名称颜色 #555555
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">鼠标悬浮</div>
      <div class="img-conter"><img class="img" :src="s30" /></div>
      <div class="img-title">
        鼠标悬浮状态<br/>
        目录名称颜色 #990F0F
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">点击状态</div>
      <div class="img-conter"><img class="img" :src="s31" /></div>
      <div class="img-title">
        点击状态<br />
        目录名称颜色 #990F0F<br />
        填充颜色 #990F0F-透明度10%（#F1E6E6）
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">默认状态</div>
      <div class="img-conter"><img class="img" :src="s32" /></div>
      <div class="img-title">
        默认状态<br />
        目录名称颜色 #555555
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">鼠标悬浮</div>
      <div class="img-conter"><img class="img" :src="s33" /></div>
      <div class="img-title">
        鼠标悬浮状态<br/>
        目录名称颜色 #990F0F
      </div>
    </div>
    <div class="img-clo-wrap">
      <div class="title">点击状态</div>
      <div class="img-conter"><img class="img" :src="s34" /></div>
      <div class="img-title">
        点击状态<br />
        目录名称颜色 #990F0F<br />
        填充颜色 #990F0F-透明度10%（#F1E6E6）
      </div>
    </div>
    <div id="f" class="h2-title">06 页面布局</div>
    <div class="text">页面布局是体系化视觉设计的起点，基于「秩序之美」的原则，探索 UI 设计中的动态空间秩序，并形成 Xinjiang Usert</div>
    <div class="text-title"><span>统一画板：</span>为了尽可能减少用户沟通与理解的成本，有必要在使用组件库内部统一尺寸。Xinjiang Userty Design中统</div>
    <div class="text-title"><span>布局方案：</span>Xinjiang Userty Design使用较为典型的两种布局方式，上下布局与左右布局。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s35" />
        <div class="img-title">上图为左右布局方案，常见的做法是将左边的导航栏固定，右边的工作区域可以根据需要进行动态缩放。</div>
      </div>
    </div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s36" />
        <div class="img-title">上图为左右布局方案，常见的做法是将右边的导航栏固定，左边的工作区域可以根据需要进行动态缩放。</div>
      </div>
    </div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s37" />
        <div class="img-title">上图为上下布局方案，做法是当留白区域到达限定值之后再对中间的主内容区域进行动态缩放，并且留出底端导航部分。</div>
      </div>
    </div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s38" />
        <div class="img-title">上图为顶部布局方案，做法是各部分权重与排列顺序呈正相关，即排列顺序影响用户使用频次。</div>
      </div>
    </div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s39" />
        <div class="img-title">上图为弹出式布局方案，用于拓展承载层级，让用户对整个网站可以一目了然。</div>
      </div>
    </div>
    <div class="text-title"><span>网格单位：</span>Xinjiang Userty Design 通过网格体系来实现视觉体系的秩序。网格的基数为 8，不仅符合偶数的思路</div>
    <div class="text-title"><span>关于栅格：</span>Xinjiang Userty Design 采用 24 栅格体系。以上下布局的结构为例，对内容区域进行 24 栅格</div>

    <div class="img-wrap">
      <div>
        <img class="img" :src="s40" />
      </div>
    </div>
    <div class="text">对开发者而言栅格是实现动态布局的手段，而设计师对于栅格的理解源自平面设计中的栅格。在具体落地中视角的不同就容易造成偏差，最终影</div>
    <div class="text">Xinjiang Userty Design 的设计师通过 4 点来实现设计过程中和工程师的沟通：</div>
    <div class="text">
      1. 清晰的定义动态布局范围<br/>
      2. 尽量保持偶数思维<br/>
      3. 关键数据的交付（Gutter、Column）<br/>
      4. 区块的定义要从<br/>
    </div>


    <div class="text-title"><span>常见模度：</span>Xinjiang Userty Design中后台涵盖了大量的不同类型和量级的产品，为了帮助不同设计能力的设计者们在</div>

    <div class="img-wrap">
      <div>
        <img class="img" :src="s41" />
      </div>
    </div>
  </div>
</template>
<script>
import welcome from '../../assets/guide/welcome.png';

import s1 from '../../assets/guide/s1.png';
import s2 from '../../assets/guide/s2.png';
import s3 from '../../assets/guide/s3.png';
import s4 from '../../assets/guide/s4.png';
import s5 from '../../assets/guide/s5.png';
import s6 from '../../assets/guide/s6.png';
import s7 from '../../assets/guide/s7.png';
import s8 from '../../assets/guide/s8.png';
import s9 from '../../assets/guide/s9.png';
// import s10 from '../../assets/guide/s10.png';
// import s11 from '../../assets/guide/s11.png';
import s12 from '../../assets/guide/s12.png';
import s13 from '../../assets/guide/s13.png';
import s14 from '../../assets/guide/s14.png';
import s15 from '../../assets/guide/s15.png';
import s16 from '../../assets/guide/s16.png';
import s17 from '../../assets/guide/s17.png';
import s18 from '../../assets/guide/s18.png';
import s19 from '../../assets/guide/s19.png';
import s20 from '../../assets/guide/s20.png';
import s21 from '../../assets/guide/s21.png';
import s22 from '../../assets/guide/s22.png';
import s23 from '../../assets/guide/s23.png';
import s24 from '../../assets/guide/s24.png';
import s25 from '../../assets/guide/s25.png';
import s26 from '../../assets/guide/s26.png';
import s27 from '../../assets/guide/s27.png';
import s28 from '../../assets/guide/s28.png';
import s29 from '../../assets/guide/s29.png';
import s30 from '../../assets/guide/s30.png';
import s31 from '../../assets/guide/s31.png';
import s32 from '../../assets/guide/s32.png';
import s33 from '../../assets/guide/s33.png';
import s34 from '../../assets/guide/s34.png';
import s35 from '../../assets/guide/s35.png';
import s36 from '../../assets/guide/s36.png';
import s37 from '../../assets/guide/s37.png';
import s38 from '../../assets/guide/s38.png';
import s39 from '../../assets/guide/s39.png';
import s40 from '../../assets/guide/s40.png';
import s41 from '../../assets/guide/s41.png';

export default {
  data() {
    return {
      welcome,
      s1,s2,s3,s4,s5,s6,s7,s8,s9,
      // s10,s11,
      s12,s13,s14,s15,s16,s17,s18,s19,s20,
      s21,s22,s23,s24,s25,s26,s27,s28,s29,s30,
      s31,s32,s33,s34,s35,s36,s37,s38,s39,s40,s41,
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
.img-clo-wrap {
  .img-clo-wrap-d();
}
</style>
