import {ConfigConsumerProps} from '../config-provider/configConsumerProps';

const LoginPage = {
  name: 'OLoginPage',
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  render() {
    const {getPrefixCls} = this.configProvider;
    const prefixCls = getPrefixCls('loginpage');

    return (
        <div className={prefixCls}>
            login page components
        </div>
    );
  },
};

/* istanbul ignore next */
LoginPage.install = Vue => {
    Vue.component(LoginPage.name, LoginPage);
};
export default LoginPage;
