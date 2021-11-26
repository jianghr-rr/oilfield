<cn>
#### 带搜索框
带搜索框的穿梭框，可以自定义搜索函数，并可定制宽高。
</cn>

<us>
#### Search
Transfer with a search box.
</us>

```vue
<template>
  <o-transfer
    :data-source="mockData"
    :titles="['来源', '目标']"
    show-search
    :filter-option="filterOption"
    :target-keys="targetKeys"
    :render="item => item.title"
    :locale="{itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容'}"
    @change="handleChange"
    @search="handleSearch"
  />
</template>
<script>
export default {
  data() {
    return {
      mockData: [],
      targetKeys: [],
    };
  },
  mounted() {
    this.getMock();
  },
  methods: {
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `内容${i + 1}`,
          description: `描述${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData;
      this.targetKeys = targetKeys;
    },
    filterOption(inputValue, option) {
      return option.description.indexOf(inputValue) > -1;
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
    handleSearch(dir, value) {
      console.log('search:', dir, value);
    },
  },
};
</script>
```
