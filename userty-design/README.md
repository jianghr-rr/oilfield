# react-sstr-ui
为新旧项目能顺利的满足UE4.0的规范做努力
## ⚙️ 开发
- **基于antd4.16**
- **基于react17+、ts4+、less4+开发**
- **基于UE4.0规范**

建议使用TS、hook写法
- 安装
    ``` shell
    npm i
    ```
    or
    ``` shell
    yarn
    ```
- 启动
    ``` shell
    npm run start
    ```

## 🍥 添加组件
组件放置在components文件夹下
``` javascript
|-- |-- button
|-- |-- demo
|-- |-- |-- base.md // 解析成页面里的组件
|-- |-- style // 样式一定放在这 JS不用引用
|-- |-- |-- index.less
|-- |-- index.tsx // 入口
|-- |-- button.tsx // 其他模块
|-- |-- index.md // 文档展示入口
```
### 组件的出口
添加完组件后在 `packages/react-sstr-ui/components/index.tsx`添加相应的导出即可
``` javascript
// ...
export {default as TableEmpty} from './biz-empty';

```

### 🧩 样式定义
变量及样式分为三层: 全部通用样式 -> 组件之间通用样式 -> 组件样式
样式写在对应的style文件夹下便可支持babel-import的按需加载
- 基础变量
  文件路径: `react-sstr-ui/components/style/themes/default.less`
  ``` less
    @import '../color/colors';
    @import './config';

    // 尺寸单位
    @P: 4px;
    @p: 4px;

    // -------- Colors -----------
    @primary-color: @blue-6;
  ```
- 组件样式变量
  文件路径`react-sstr-ui/components/style/themes/components/button.less`
  ``` less
    @import '../default.less';

    @btn-primary-bg: @primary-color;
  ```
- 组件样式
  ``` less
    @import '../../style/themes/index';
    @import '../../style/mixins/index';
    @import './mixin';

    &-background-ghost&-primary {
        .button-variant-ghost(@btn-primary-bg);
    }
  ```
