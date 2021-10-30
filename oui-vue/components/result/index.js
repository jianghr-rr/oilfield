import PropTypes from '../_util/vue-types';
import { ConfigConsumerProps } from '../config-provider/configConsumerProps';
import Icon from '../icon';
import Base from '../base';

const Result = {
  name: 'OResult',
  props: {
    isSuccess: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string
  },
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  render() {
    const { prefixCls: customizePrefixCls } = this.$props;

    const getPrefixCls = this.configProvider.getPrefixCls;
    const prefixCls = getPrefixCls('result', customizePrefixCls);

    return (
        <div class={prefixCls}>
            <div>
                <Icon class={`${this.isSuccess ? 'success' : 'error'} icon`} type={this.isSuccess ? 'check' : 'close'} />
            </div>
            {this.title && <div class={`${prefixCls}-title`}>{this.title}</div>}
            {this.description && <div class={`${prefixCls}-title-desc`}>{this.description}</div>}
            <div class={`${prefixCls}-title-content`}>
                {this.$slots.default}
            </div>
            <div class={`${prefixCls}-action`}>
                {this.$slots.action}
            </div>
        </div>
    );
  },
};

/* istanbul ignore next */
Result.install = function(Vue) {
    Vue.use(Base);
    Vue.component(Result.name, Result);
};

export default Result;
