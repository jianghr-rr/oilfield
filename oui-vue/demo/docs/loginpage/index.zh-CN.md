## API

```html
<template>
    <login-page
        :type="type"
        :loading="loading"
        @onRegister="handleRegister"
        @onLogin="handleLogin"
        @onRemember="handleRemember"
        @onGetVeryCode="handleGetVeryCode"
        @onTypeChange="handleTypeChange"
    />
</template>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 当前所处的功能页面, 可选参数: 'login', 'message', 'register' | String | login |
| loading | 设置按钮载入状态 | boolean | `false` |

### Eents事件

| 事件名称      | 说明                                 | 回调参数                                        |
| ------------- | ------------------------------------ | ----------------------------------------------- |
| onRegister    | 注册表单校验事件，点击注册按钮时触发 | function({ phone, verycode, password,confirm }) |
| onLogin       | 登录表单校验事件，点击登录按钮时触发 | function({ userName, password, verycode})       |
| onRemember    | '记住登陆状态'选择状态变更时触发     | function(status: Boolean)                       |
| onGetVeryCode | 注册表单中点击获取验证码时触发       | function                                        |
| onTypeChange  | 用户操作时`type`类型变更的回调       | function(type: String)                          |
