<cn>
  #### 带页签的卡片
  可承载更多内容
</cn>

<us>
  #### With tabs
  More content can be hosted
</us>

```vue
<template>
  <div>
    <o-card
      style="width:100%"
      title="卡片名称"
      :tab-list="tabList"
      :active-tab-key="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <span slot="customRender" slot-scope="item">{{ item.key }} </span>
      <a slot="extra" href="#">操作按钮</a>
      {{ contentList[key] }}
    </o-card>
    <br /><br />
    <o-card
      style="width:100%"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <p v-if="noTitleKey === '文章'">
        文章 内容
      </p>
      <p v-else-if="noTitleKey === 'app'">
        app 内容
      </p>
      <p v-else="noTitleKey === '项目名称'">
        项目 内容
      </p>
    </o-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          key: '标签 1',
          // tab: 'tab1',
          scopedSlots: { tab: 'customRender' },
        },
        {
          key: '标签 2',
          tab: 'tab2',
        },
      ],
      contentList: {
        tab1: '标签 1 内容 ',
        tab2: '标签 2 内容 ',
      },
      tabListNoTitle: [
        {
          key: '文章',
          tab: '文章',
        },
        {
          key: 'app',
          tab: 'app',
        },
        {
          key: '项目名称',
          tab: '项目名称',
        },
      ],
      key: 'tab1',
      noTitleKey: 'app',
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
</script>
```
