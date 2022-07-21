---
order: 5
title:
  zh-CN: 多个按钮组合
  en-US: Multiple Buttons
---

## zh-CN

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 [Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button) 中组合使用。

```jsx
import {Button, Menu, Dropdown} from 'skd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div className="container">
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
  </div>,
  mountNode,
);
```

```css
.container {
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
}
.container .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
}
```
