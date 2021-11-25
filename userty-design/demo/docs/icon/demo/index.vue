<script>
import IconDisplay from '../../../theme/template/IconDisplay';
import Basic from './basic.md';
import Custom from './custom.md';
import Iconfont from './iconfont.md';
import Twotone from './two-tone.md';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
const md = {
  cn: `# 图标 Icon
        语义化的矢量图形。
## 代码演示
      `,
  us: `# Icon
        Semantic vector graphics.
## List of icons
      `,
};
export default {
  category: 'Components',
  type: 'General',
  zhType: '通用',
  title: 'Icon',
  subtitle: '图标',
  render() {
    return (
      <div>
        <md class="api-container" cn={md.cn} us={md.us} />
        <IconDisplay class="markdown" />
        <Basic />
        <Custom />
        <Iconfont />
        <Twotone />
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
