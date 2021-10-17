## API

```html
<template>
  <o-menu>
    <o-menu-item>菜单项</o-menu-item>
    <a-sub-menu title="子菜单">
      <o-menu-item>子菜单项</o-menu-item>
    </a-sub-menu>
  </o-menu>
</template>
```

### Props

| Param | Description | Type | Default value |
| --- | --- | --- | --- |
| type | current form type: `login`, `message`, `register` | String | login |
| loading | loading status | boolean | `false` |

### Events

| Param         | Description                                                  | Type                                                 |
| ------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| onRegister    | registration form verification event, triggered when the registration button is clicked | function({ phone, verycode, password,confirm })false |
| onLogin       | login form verification event, triggered when the login button is clicked | function({ userName, password, verycode})            |
| onRemember    | triggered when 'remember login status' selects status change | function(status: Boolean)                            |
| onGetVeryCode | triggered when you click to get the very code in the registration form | function                                             |
| onTypeChange  | callback when the switch tab changed or the form changed     | function(type: String)                               |
