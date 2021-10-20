## API

```html
<template>
    <grid-form :form="form" :options="options" :span="100">
        <template slot="company" slot-scope="{data}">
            <o-input v-bind="data" v-decorator="data.decorator"></o-input>
        </template>
        <template slot="Invoice" slot-scope="{data}">
            <o-input v-bind="data" v-decorator="data.decorator"></o-input>
        </template>
    </grid-form>
</template>

<script>
	export default {
        name: 'demo',
        data() {
            return {
                form: null,
                options:{
                    name: 'oilForm',
                    items: [
                        {
                            dataIndex: 'company',
                            label: '公司名称',
                            control: {
                                decorator: [
                                    'company',
                                    {
                                        rules: [
                                            {required: true, message: '请输入公司名称'}
                                        ]
                                    }
                                ],
                                maxLength: 20,
                                placeholder: '请输入公司名称'
                            }
                        },
                        {
                            dataIndex: 'Invoice',
                            label: '发票抬头',
                            control: {
                                decorator: [
                                    'Invoice',
                                    {
                                        rules: [
                                            {required: true, message: '请输入发票抬头'}
                                        ]
                                    }
                                ],
                                maxLength: 20,
                                placeholder: '请输入发票抬头'
                            }
                        },
                        // ...others
                    ]
                }
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.form = this.$form.createForm(this, {
                    name: 'oil_form',
                    // ...other base options
                });
            });
        }
    }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 经 `Form.create()` 包装过的组件会自带 `this.form` 属性，如果使用 template 语法，可以使用 this.$form.createForm(this, options) | object | - |
| span | 栅格占位百分比，为 0 时相当于 `display: none` | number | 100 |
| gap | 栅格间距 | number | 0 |
| options | 表单配置项 | object | [] |

## Options

| 参数  | 说明                   | 类型   | 默认值 |
| ----- | ---------------------- | ------ | ------ |
| name  | 表单名，非必传         | String | -      |
| left  | 左右布局时左侧表单内容 | Object | -      |
| items | 表单内容配置项         | Array  | []     |

## Options.items

| 参数      | 说明                         | 类型   | 默认值 |
| --------- | ---------------------------- | ------ | ------ |
| dataIndex | form item名称，必传项        | String | -      |
| control   | 控件配置项目，请参考`0-form` | Object | -      |

其他项目也请移步`o-form`组件查看

### Eents事件

可使用`o-form`事件或者自行绑定