---
type: 反馈
category: Components
subtitle: 提示
title: notification
order: 2
check: 2
---


全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## API

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.close(key: String)`
- `notification.destroy()`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS class | string | - |
| closeIcon | 自定义关闭图标 | ReactNode | - |
| description | 通知提醒内容，必选 | ReactNode | - |
| duration | 不设置 则不自动关闭 | number | - |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| icon | 自定义图标 | ReactNode | - |
| key | 当前通知唯一标志 | string | - |
| message | 通知提醒标题，必选 | ReactNode | - |
| onClick | 点击通知时触发的回调函数 | function | - |
| onClose | 当通知关闭时触发 | function | - |
