import debounce from 'lodash/debounce';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import {
  filterEmpty,
  initDefaultProps,
  isValidElement,
  getComponentFromProp,
  getListeners,
} from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { ConfigConsumerProps } from '../config-provider/configConsumerProps';

export const SpinSize = PropTypes.oneOf(['small', 'default', 'large']);

export const SpinProps = () => ({
  prefixCls: PropTypes.string,
  spinning: PropTypes.bool,
  size: SpinSize,
  wrapperClassName: PropTypes.string,
  tip: PropTypes.string,
  delay: PropTypes.number,
  indicator: PropTypes.any,
});

// Render indicator
let defaultIndicator;

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

export function setDefaultIndicator(Content) {
  defaultIndicator =
    typeof Content.indicator === 'function'
      ? Content.indicator
      : h => {
          return <Content.indicator />;
        };
}

export default {
  name: 'OSpin',
  mixins: [BaseMixin],
  props: initDefaultProps(SpinProps(), {
    size: 'default',
    spinning: true,
    wrapperClassName: '',
  }),
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  data() {
    const { spinning, delay } = this;
    const shouldBeDelayed = shouldDelay(spinning, delay);
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(this.$props);
    return {
      sSpinning: spinning && !shouldBeDelayed,
    };
  },
  mounted() {
    this.updateSpinning();
  },
  updated() {
    this.$nextTick(() => {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    });
  },
  beforeDestroy() {
    this.cancelExistingSpin();
  },
  methods: {
    debouncifyUpdateSpinning(props) {
      const { delay } = props || this.$props;
      if (delay) {
        this.cancelExistingSpin();
        this.updateSpinning = debounce(this.originalUpdateSpinning, delay);
      }
    },
    updateSpinning() {
      const { spinning, sSpinning } = this;
      if (sSpinning !== spinning) {
        this.setState({ sSpinning: spinning });
      }
    },
    cancelExistingSpin() {
      const { updateSpinning } = this;
      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    },
    getChildren() {
      if (this.$slots && this.$slots.default) {
        return filterEmpty(this.$slots.default);
      }
      return null;
    },
    renderIndicator(h, prefixCls) {
      // const h = this.$createElement
      const dotClassName = `${prefixCls}-dot`;
      let indicator = getComponentFromProp(this, 'indicator');
      // should not be render default indicator when indicator value is null
      if (indicator === null) {
        return null;
      }
      if (Array.isArray(indicator)) {
        indicator = filterEmpty(indicator);
        indicator = indicator.length === 1 ? indicator[0] : indicator;
      }
      if (isValidElement(indicator)) {
        return cloneElement(indicator, { class: dotClassName });
      }

      if (defaultIndicator && isValidElement(defaultIndicator(h))) {
        return cloneElement(defaultIndicator(h), { class: dotClassName });
      }

      return (
        <span class={`${dotClassName} ${prefixCls}-dot-spin`}>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          <i class={`${prefixCls}-dot-item`}>
            <svg t="1637251477741" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="926" ><path d="M500.992 600.576c-0.256 0.512-0.256 1.024-0.512 1.536-24.832 96.512-49.92 193.024-74.752 289.28h0.256c-8.704 41.728 14.08 84.48 55.04 99.84 45.312 16.896 96-6.144 112.896-51.456 5.632-15.36 6.912-30.976 4.096-46.08a9.088 9.088 0 0 1-0.512-2.56l-0.768-3.84-63.744-284.672v-0.512c-1.28-5.12-5.12-9.472-10.496-11.52a16.998 16.998 0 0 0-21.504 9.984z" p-id="927"></path></svg>
          </i>
          {/* <i class={`${prefixCls}-dot-item`} />
          <i class={`${prefixCls}-dot-item`} />
          <i class={`${prefixCls}-dot-item`} /> */}
        </span>
      );
    },
  },
  render(h) {
    const {
      size,
      prefixCls: customizePrefixCls,
      tip,
      wrapperClassName,
      ...restProps
    } = this.$props;
    const getPrefixCls = this.configProvider.getPrefixCls;
    const prefixCls = getPrefixCls('spin', customizePrefixCls);

    const { sSpinning } = this;
    const spinClassName = {
      [prefixCls]: true,
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-spinning`]: sSpinning,
      [`${prefixCls}-show-text`]: !!tip,
    };

    const spinElement = (
      <div {...restProps} class={spinClassName}>
        {this.renderIndicator(h, prefixCls)}
        {tip ? <div class={`${prefixCls}-text`}>{tip}</div> : null}
      </div>
    );
    const children = this.getChildren();
    if (children) {
      const containerClassName = {
        [`${prefixCls}-container`]: true,
        [`${prefixCls}-blur`]: sSpinning,
      };

      return (
        <div
          {...{ on: getListeners(this) }}
          class={[`${prefixCls}-nested-loading`, wrapperClassName]}
        >
          {sSpinning && <div key="loading">{spinElement}</div>}
          <div class={containerClassName} key="container">
            {children}
          </div>
        </div>
      );
    }
    return spinElement;
  },
};
