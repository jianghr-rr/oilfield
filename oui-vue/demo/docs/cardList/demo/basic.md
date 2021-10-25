<cn>
#### 基础用法
</cn>

<us>
#### Useage
Step bar + custom content.
</us>

## 用例

```vue
<template>
  <div class="card-list">
    <o-list
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
    >
      <o-list-item slot="renderItem" slot-scope="item">
        <template v-if="item.add">
          <o-button class="new-btn" type="dashed">
            <o-icon type="plus" />新增产品
          </o-button>
        </template>
        <template v-else>
          <o-card :hoverable="true">
            <o-card-meta >
              <div style="margin-bottom: 3px" slot="title">{{item.title}}</div>
              <o-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large" />
              <div class="meto-content" slot="description">{{item.content}}</div>
            </o-card-meta>
            <a slot="actions">操作一</a>
            <a slot="actions">操作一</a>
          </o-card>
        </template>
      </o-list-item>
    </o-list>
  </div>
</template>

<script>
const dataSource = []
dataSource.push({
  add: true
})
for (let i = 0; i < 11; i++) {
  dataSource.push({
    title: 'XinJiang Userty Design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    content: '一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
  })
}

export default {
  name: 'CardList',
  data () {
    return {
      desc: '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。',
      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource
    }
  }
}
</script>

<style lang="less" scoped>
  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
  .new-btn{
    border-radius: 2px;
    width: 100%;
    height: 187px;
  }
  .meto-content{
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 64px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

</style>
```

