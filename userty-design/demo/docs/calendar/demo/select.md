<cn>
#### 选择功能
一个通用的日历面板，支持年/月切换。
</cn>

<us>
#### Selectable Calendar
A basic calendar component with Year/Month switch.
</us>

```vue
<template>
  <div>
    <o-alert
      :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`"
      :style="{border: '1px solid #990F0F', background: '#F5E7E7'}"
    />
    <div
      :style="{
        display: 'inline-block',
        width: '48%',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }"
    >
      <o-calendar :value="value" @select="onSelect" @panelChange="onPanelChange" />
    </div>
    <div
      :style="{
        display: 'inline-block',
        width: '48%',
        marginLeft: '20px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }"
    >
      <o-calendar v-model="value1" />
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
      value1: moment('2017-01-25'),
    };
  },
  methods: {
    onSelect(value) {
      this.value = value;
      this.selectedValue = value;
    },
    onPanelChange(value) {
      this.value = value;
    },
  },
};
</script>
```
