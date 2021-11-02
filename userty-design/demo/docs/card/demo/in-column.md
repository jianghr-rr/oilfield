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
    <a-row :gutter="16">
      <a-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </a-col>
      <a-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </a-col>
      <a-col :span="8">
        <o-card title="Card title" :bordered="false">
          <p>card content</p>
        </o-card>
      </a-col>
    </a-row>
  </div>
</template>
```
