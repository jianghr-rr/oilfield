---
type: 顶部
category: Components
title: 文档
subtitle: 文档
---

## 如何使用skd
### 安装
    切换npm源 http://114.115.139.136:4873/
    npm i skd
### 引用
    import {Button, Select} from 'skd';
### 样式
#### 方式一：全局引用
    import 'skd/dist/skd.min.css';
#### 方式二：webpack 插件引用
    // 在bable配置中使用babel-plugin-import插件，可实现组件和样式的按需加载
    ['import', {libraryName: 'skd', style: true, libraryDirectory: 'lib',}, 'skd']
