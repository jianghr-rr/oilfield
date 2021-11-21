<template>
  <div>
    <p>
      XinJiang Userty Design Pro Pro为用户用最小的工作量，无缝接入XinJiang Userty Design Pro界面生态， 提供新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案。
    </p>
    <o-list
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
    >
      <o-list-item slot="renderItem" slot-scope="item">
        <o-card class="card-hover" :bordered="false">
          <o-card-meta>
            <div style="margin-bottom: 3px" slot="title">{{item.title}}</div>
            <o-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large" />
            <div class="meto-content" slot="description">{{item.content}}</div>
          </o-card-meta>
          <a slot="actions">操作一</a>
          <a slot="actions">操作一</a>
        </o-card>
      </o-list-item>
    </o-list>
  </div>
</template>

<script>
const titles = ['XinJiang Userty Design Pro', 'Vue', 'React', 'Webpack', 'Angular', 'Bootstrap'];
const icons = [
  'https://i.loli.net/2021/11/10/8HVg9aflzD5poGe.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
];
const dataSource = [...(
  new Array(6).fill().map((_item, index) => ({
      title: titles[index],
      avatar: icons[index],
      content: '一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
  }))
)];

export default {
  name: 'CardList',
  data () {
    return {
      dataSource
    }
  }
}
</script>

<style lang="less" scoped>
  p{
    margin: 10px 0 20px;
  }
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
  .card-hover{
    &:hover{
      box-shadow: 0 2px 8px rgba(@primary-color, .2);
    }
  }

</style>