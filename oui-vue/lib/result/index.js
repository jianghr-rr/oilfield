'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueTypes = require('../_util/vue-types');

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _configConsumerProps = require('../config-provider/configConsumerProps');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Result = {
    name: 'OResult',
    props: {
        isSuccess: _vueTypes2['default'].bool,
        title: _vueTypes2['default'].string,
        description: _vueTypes2['default'].string
    },
    inject: {
        configProvider: { 'default': function _default() {
                return _configConsumerProps.ConfigConsumerProps;
            } }
    },
    render: function render() {
        var h = arguments[0];
        var customizePrefixCls = this.$props.prefixCls;


        var getPrefixCls = this.configProvider.getPrefixCls;
        var prefixCls = getPrefixCls('result', customizePrefixCls);

        return h(
            'div',
            { 'class': prefixCls },
            [h('div', [h(_icon2['default'], { 'class': (this.isSuccess ? 'success' : 'error') + ' icon', attrs: { type: this.isSuccess ? 'check' : 'close' }
            })]), this.title && h(
                'div',
                { 'class': prefixCls + '-title' },
                [this.title]
            ), this.description && h(
                'div',
                { 'class': prefixCls + '-title-desc' },
                [this.description]
            ), h(
                'div',
                { 'class': prefixCls + '-title-content' },
                [this.$slots['default']]
            ), h(
                'div',
                { 'class': prefixCls + '-action' },
                [this.$slots.action]
            )]
        );
    }
};

/* istanbul ignore next */
Result.install = function (Vue) {
    Vue.use(_base2['default']);
    Vue.component(Result.name, Result);
};

exports['default'] = Result;