import PropTypes from '../_util/vue-types';
import { ConfigConsumerProps } from '../config-provider/configConsumerProps';
import Icon from '../icon';
import Base from '../base';

var Result = {
    name: 'OResult',
    props: {
        isSuccess: PropTypes.bool,
        title: PropTypes.string,
        description: PropTypes.string
    },
    inject: {
        configProvider: { 'default': function _default() {
                return ConfigConsumerProps;
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
            [h('div', [h(Icon, { 'class': (this.isSuccess ? 'success' : 'error') + ' icon', attrs: { type: this.isSuccess ? 'check' : 'close' }
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
    Vue.use(Base);
    Vue.component(Result.name, Result);
};

export default Result;