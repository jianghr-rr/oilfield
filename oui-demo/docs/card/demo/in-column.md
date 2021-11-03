<cn>
  #### 栅格卡片
  在系统概览页面常常和栅格进行配合。
</cn>

<us>
  #### Card in column
  Cards usually cooperate with grid column layout in overview page.
</us>

```vue
<template>
  <div style="background-color: #ececec; padding: 20px;">
    <o-row :gutter="16">
      <o-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </o-col>
      <o-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </o-col>
      <o-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </o-col>
    </o-row>
  </div>
</template>
```
