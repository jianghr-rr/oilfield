<cn>
#### 交替展现
内容在时间轴两侧轮流出现。
</cn>

<us>
#### Alternate
Alternate timeline.
</us>

```vue
<template>
  <o-timeline mode="alternate">
    <o-timeline-item>Create a services site 2015-09-01</o-timeline-item>
    <o-timeline-item color="green">
      Solve initial network problems 2015-09-01
    </o-timeline-item>
    <o-timeline-item>
      <o-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </o-timeline-item>
    <o-timeline-item color="red">
      Network problems being solved 2015-09-01
    </o-timeline-item>
    <o-timeline-item>Create a services site 2015-09-01</o-timeline-item>
    <o-timeline-item>
      <o-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Technical testing 2015-09-01
    </o-timeline-item>
  </o-timeline>
</template>
```
