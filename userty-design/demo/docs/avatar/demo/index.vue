<script>
import Basic from './basic';
import Basic1 from './badge-1';
import Badge from './badge';
import Type from './type';
import Dynamic from './dynamic';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

const md = {
  cn: `# 头像 Avatar
          用来代表用户或事物，支持图片、图标或字符展示。

          ## 代码演示`,
  us: `# Avatar
          Avatars can be used to represent people or objects. It supports images, 'Icon's, or letters.
          ## Examples
          `,
};
export default {
  // category: 'Components',
  // subtitle: '头像',
  // type: 'Data Display',
  // zhType: '数据展示',
  // title: 'Avatar',

  category: 'Components',
  type: 'General',
  zhType: '通用',
  title: 'Avatar',
  subtitle: '头像',

  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-sort>
          <Basic />
          <Type />
          <Dynamic />
          <Badge />
          <Basic1 />
        </demo-sort>
        <api>
          <template slot="cn">
            <CN />
          </template>
          <US />
        </api>
      </div>
    );
  },
};
</script>
