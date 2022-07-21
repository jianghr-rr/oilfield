---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```jsx
import {Input} from 'skd';
import {UserOutlined} from '@ant-design/icons';

ReactDOM.render(
    <>
        <Input placeholder="Basic usage" />
        <br/>
        <br/>
        <Input placeholder="Basic usage" limitLength={20} />
        <br/>
        <br/>
        <Input placeholder="Basic usage" limitLength={20} disabled/>
    </>,
    mountNode
);
```
