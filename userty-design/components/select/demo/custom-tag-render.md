---
order: 24
title:
  zh-CN: 自定义选择标签
  en-US: Custom Tag Render
---

## zh-CN

允许自定义选择标签的样式。

## en-US

Allows for custom rendering of tags.

```jsx
import { Select, Tag } from 'antd';

// const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
const options = [
    {id: 1, text: 'aa1aa'},
    {id: 2, text: 'bb1bb'},
    {id: 3, text: 'or1ange'},
    {id: 4, text: 'ap1ple'},
    {id: 5, text: 'ban1anabanana'}
];

const testValue = [
    {id: 3, text: 'orange'},
    {id: 5, text: 'bananabanana'}
];

function tagRender(props) {
  console.log('props:::', props);
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
    //   color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

ReactDOM.render(
  <Select
    mode="tags"
    showArrow
    tagRender={tagRender}
    value={testValue}
    optionLabelProp='text'
    labelInValue
    fieldNames={{
        label: 'text',
        value: 'id'
    }}
    // defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />,
  mountNode,
);
```
