---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```jsx
import {Tooltip} from 'skd';

ReactDOM.render(
    <>
     <Tooltip title="prompt text">
        <span>default Tooltip</span>
    </Tooltip>
    <br />
     <Tooltip title="prompt text" color={'#000000d9'} overlayInnerStyle={{color:'#fff'}}>
        <span>black Tooltip</span>
    </Tooltip>
    </>,
  mountNode,
);
```
