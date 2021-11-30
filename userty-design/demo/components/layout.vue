<script>
import { enquireScreen } from 'enquire-js';
import AllDemo from '../site/demo';
import Header from './hompageHeader';
import Footer from './footer';
// import Geektime from './geektime';
import GeektimeAds from './geektime_ads';
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import sortBy from 'lodash/sortBy';
import { isZhCN } from '../utils/util';
import { Provider, create } from '../../components/_util/store';
import NProgress from 'nprogress';
// import SettingDrawer from './SettingDrawer';
// import MobileMenu from '../../components/vc-drawer/src';
import TopAd from './top_ad';
import GoogleAds from './GoogleAds';

const docsList = [];

const isGitee = window.location.host.indexOf('gitee.io') > -1;
const showAd = false;

export default {
  provide() {
    return {
      demoContext: this,
    };
  },
  props: {
    name: String,
    showDemo: Boolean,
    showApi: Boolean,
  },
  data() {
    this.store = create({
      currentSubMenu: [],
    });
    this.subscribe();
    let blocked = false;
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'adsbox';
      document.body.appendChild(div);
      blocked = 'none' === getComputedStyle(div).display;
    }, 300);
    return {
      showSideBars: true,
      currentSubMenu: [],
      sidebarHeight: document.documentElement.offsetHeight,
      isMobile: false,
      blocked,
      themmeColor: this.$store.getters.color
    };
  },
  computed: {
    getColor() {
      console.log(this.$store.getters.color);
      return this.$store.getters.color
    }
  },
  watch: {
    '$route.path'() {
      this.store.setState({ currentSubMenu: [] });
      this.addSubMenu();
    },
    getColor(val) {
      console.log('val', val);
      this.themmeColor = val;
    }
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    clearTimeout(this.timer);
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  mounted() {
    if (isGitee) {
    }

    this.$nextTick(() => {
      this.addSubMenu();
      const nprogressHiddenStyle = document.getElementById('nprogress-style');
      if (nprogressHiddenStyle) {
        this.timer = setTimeout(() => {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
      enquireScreen(b => {
        this.isMobile = !!b;
      });
    });
  },
  methods: {
    addSubMenu() {
      if (this.$route.path.indexOf('/docs/vue/') !== -1) {
        this.$nextTick(() => {
          const menus = [];
          const doms = [...this.$refs.doc.querySelectorAll(['h2', 'h3'])];
          doms.forEach(dom => {
            const id = dom.id;
            if (id) {
              const title = dom.textContent.split('#')[0].trim();
              menus.push({ cnTitle: title, usTitle: title, id });
            }
          });
          this.currentSubMenu = menus;
        });
      }
    },
    subscribe() {
      const { store } = this;
      this.unsubscribe = store.subscribe(() => {
        this.currentSubMenu = this.store.getState().currentSubMenu;
      });
    },
    getSubMenu(isCN) {
      const currentSubMenu = this.currentSubMenu;
      const lis = [];
      currentSubMenu.forEach(({ cnTitle, usTitle, id }, index) => {
        const title = isCN ? cnTitle : usTitle;
        lis.push(<o-anchor-link key={id + index} href={`#${id}`} title={title} />);
      });
      const showApi = this.$route.path.indexOf('/components/') !== -1;
      return (
        <o-anchor offsetTop={100} class="demo-anchor">
          {lis}
          {showApi ? <o-anchor-link key="API" title="API" href="#API" /> : ''}
        </o-anchor>
      );
    },
    getDocsMenu(isCN, pagesKey) {
      const docsMenu = [];
      docsList.forEach(({ key, enTitle, title }) => {
        const k = isCN ? `${key}-cn` : key;
        pagesKey.push({ name: k, url: `/docs/vue/${k}/`, title: isCN ? title : enTitle });
        docsMenu.push(<router-link to={`/docs/vue/${k}/`}>{isCN ? title : enTitle}</router-link>);
      });
      return docsMenu;
    },
    resetDocumentTitle(component, name, isCN) {
      let titleStr = 'XinJiang Userty Design';
      if (component) {
        const { subtitle, title } = component;
        const componentName = isCN ? subtitle + ' ' + title : title;
        titleStr = componentName + ' - ' + titleStr;
      } else {
        const currentKey = docsList.filter(item => {
          return item.key === name;
        });
        if (currentKey.length) {
          titleStr = (isCN ? currentKey[0]['title'] : currentKey[0]['enTitle']) + ' - ' + titleStr;
        }
      }
      document.title = titleStr;
    },
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
    },
  },

  render() {
    const name = this.name;
    const isCN = isZhCN(name);
    const titleMap = {};
    const menuConfig = {
      General: [],
      Navigation: [],
      'Data Entry': [],
      'Data Display': [],
      Feedback: [],
      Other: [],
    };
    const menuConfigTitle = {
      General: '通用',
      Navigation: '导航',
      'Data Entry': '数据录入',
      'Data Display': '数据展示',
      Feedback: '反馈',
      Other: '其他组件',
    };
    const pagesKey = [];
    let prevPage = null;
    let nextPage = null;
    const searchData = [];
    for (const [title, d] of Object.entries(AllDemo)) {
      const type = d.type || 'Other';
      const key = `${title.replace(/(\B[A-Z])/g, '-$1').toLowerCase()}`;
      titleMap[key] = title;
      AllDemo[title].key = key;
      menuConfig[type] = menuConfig[type] || [];
      menuConfig[type].push(d);
    }
    const docsMenu = this.getDocsMenu(isCN, pagesKey);
    const reName = name.replace(/-cn\/?$/, '');
    const MenuGroup = [];
    let menuKey = '';
    let defaultOpenKey = '';
    for (const [type, menus] of Object.entries(menuConfig)) {
      const MenuItems = [];
      sortBy(menus, ['title']).forEach(({ title, subtitle, key }) => {
        const linkValue = isCN
          ? [<span class="chinese">{subtitle}</span>, '  / ' , <span>{title}</span>]
          : [<span>{title}</span>];
        if (isCN) {
          key = `${key}-cn`;
        }
        pagesKey.push({
          name: key,
          url: `/components/${key}/`,
          title: isCN ? `${title} ${subtitle}` : title,
        });
        searchData.push({
          title,
          subtitle,
          url: `/components/${key}/`,
        });
        if(key == name) {
          defaultOpenKey = type
        }
        MenuItems.push(
          <a-menu-item
            key={key}
            selectedKeys={[name]}
          >
            <router-link to={`/components/${key}/`}>{linkValue}</router-link>
          </a-menu-item>,
        );
      });
      menuKey = type;
      // console.log('type:::', type);
      MenuGroup.push(
        <a-sub-menu key={type}>
          <div slot="title"><span class="chinese">{menuConfigTitle[type]}</span>  / <span>{type}</span></div>
          {MenuItems}
        </a-sub-menu>
      );
    }
    pagesKey.forEach((item, index) => {
      if (item.name === name) {
        prevPage = pagesKey[index - 1];
        nextPage = pagesKey[index + 1];
      }
    });
    let locale = zhCN;
    // if (!isCN) {
    //   locale = enUS;
    // }
    const config = AllDemo[titleMap[reName]];
    this.resetDocumentTitle(config, reName, isCN);
    const { isMobile, $route } = this;
    return (
      <div class="" style={`--color: ${this.themmeColor}`}>
        <Header searchData={searchData} name={name} />
        <o-config-provider locale={locale}>
          <div class="layout">
            <div class="layout-left layout-left-doc">
                <o-affix style={'height: 100%, overflow: auto'}>
                  <div class="menu-wrap">
                    <a-menu
                      class="aside-container menu-site"
                      selectedKeys={[name]}
                      defaultOpenKeys={[defaultOpenKey]}
                      inlineIndent={40}
                      mode="inline"
                    >
                      {MenuGroup}
                    </a-menu>
                  </div>
                </o-affix>
              </div>
              <div class="layout-right layout-right-doc">
                <section class="main-container main-container-component">
                  <TopAd isCN={isCN} />
                  {showAd ? <GeektimeAds isMobile={isMobile} /> : null}
                  {!isMobile ? (
                    <div class={['toc-affix', isCN ? 'toc-affix-cn' : '']} style="width: 150px;">
                      {this.getSubMenu(isCN)}
                    </div>
                  ) : null}
                  {this.showDemo ? (
                    <Provider store={this.store} key={isCN ? 'cn' : 'en'}>
                      <router-view
                        class={`demo-cols-${config.cols || 2}`}
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                    </Provider>
                  ) : (
                    ''
                  )}
                  {this.showApi ? (
                    <div class="markdown api-container" ref="doc">
                      <router-view
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                      {showAd ? <GoogleAds key={`GoogleAds_${$route.path}`} /> : null}
                    </div>
                  ) : (
                    ''
                  )}
                </section>
              </div>
          </div>
          </o-config-provider>
        <Footer ref="footer" isCN={isCN} />
      </div>
    );
  },
};
</script>

<style lang="less" scope>
  // .main-menu {
  //   width: 300px;
  // }
  .layout {
    padding: 40px 0;
    display: flex;
  }
  .layout-left {
    box-shadow: 1px -2px 4px 0px #F2F2F2;
    background: #FFFFFF;
    padding: 0 0 120px 0;
    .ant-menu{
      background: #FFFFFF;
    }

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }

    .menu-wrap {
      max-height: 100vh;
      overflow: auto;
      width: 257px;
    }

    .ant-menu-submenu-inline {
      background: #FFFFFF;
    }

    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
      right: 20px;
    }
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
      width: 6px;
    }
    .ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-selected {
      background: none;
      // color: #990F0F;
      position: relative;
      &::before {
        content: ' ';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid var(--color);
      }
      &::after {
        display: none;
      }
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-sub .ant-menu-item-selected {
      background: none;
      position: relative;
      &::before {
        content: ' ';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 80px;
        border-bottom: 2px solid var(--color);
      }
      &::after {
        display: none;
      }
    }
    // .ant-menu-item:hover,
    // .ant-menu-item-active,
    // .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    // .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
    //   color: #990F0F;
    // }
    .ant-menu-sub.ant-menu-inline {
      position: relative;
      padding: 2px 0;
      &::before {
        content: ' ';
        width: 100%;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: inset 0px 15px 10px -15px #F2F2F2;
      }
      &::after {
        content: ' ';
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        box-shadow: inset 0px -5px 10px -3px #F2F2F2;
      }
      // box-shadow: 0px 0px -3px 0px #F2F2F2;
    }
  }
  .layout-left-doc {

    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    .ant-menu-vertical > .ant-menu-item,
    .ant-menu-inline > .ant-menu-item {
      height: 60px;
      line-height: 60px;
      padding-left: 60px !important;
      color: #333;
      box-sizing: border-box;
      margin: 0;
      & * {
        font-size: 12px !important;
        // color: #333;
      }
      & .chinese {
        font-size: 14px !important;
      }
    }
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      margin: 0;
      padding-left: 80px !important;
      color: #333;
      & * {
        font-size: 12px !important;
        // color: #333;
      }
      & .chinese {
        font-size: 14px !important;
      }
      // & .router-link-active {
      //   color: var(--color);
      // }
    }
  }
  .layout-right {
    flex: 1;
    margin: 0 200px 0 60px;
    padding: 8px 0 0 0;
    .main-container {
      margin: 0;
      padding: 0;
    }
  }
  .layout-right-doc * {
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  }
  // .main-menu-inner {
  //   box-shadow: 1px -2px 4px 0px #F2F2F2;
  //   height: 100%;
  //   overflow: auto;
  //   background: #FFFFFF;
  //   .ant-menu{
  //     background: none;
  //   }

  //   .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  //     border: none;
  //   }

  //   .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
  //   .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  //   .ant-menu-vertical > .ant-menu-item,
  //   .ant-menu-inline > .ant-menu-item {
  //     height: 60px;
  //     line-height: 60px;
  //     padding-left: 60px !important;
  //   }
  //   .ant-menu-sub.ant-menu-inline > .ant-menu-item {
  //     margin: 0;
  //     padding-left: 80px !important;
  //     & * {
  //       font-size: 12px;
  //     }
  //   }
  //   .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  //     right: 20px;
  //   }
  //   .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
  //   .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  //     width: 6px;
  //   }
  //   .ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-selected {
  //     background: none;
  //     // color: #990F0F;
  //     position: relative;
  //     &::before {
  //       content: ' ';
  //       width: 100%;
  //       position: absolute;
  //       bottom: 0;
  //       left: 0;
  //       border-bottom: 2px solid var(--color);
  //     }
  //     &::after {
  //       display: none;
  //     }
  //   }
  //   .ant-menu:not(.ant-menu-horizontal) .ant-menu-sub .ant-menu-item-selected {
  //     background: none;
  //     position: relative;
  //     &::before {
  //       content: ' ';
  //       width: 100%;
  //       position: absolute;
  //       bottom: 0;
  //       left: 80px;
  //       border-bottom: 2px solid var(--color);
  //     }
  //     &::after {
  //       display: none;
  //     }
  //   }
  //   // .ant-menu-item:hover,
  //   // .ant-menu-item-active,
  //   // .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  //   // .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
  //   //   color: #990F0F;
  //   // }
  //   .ant-menu-sub.ant-menu-inline {
  //     position: relative;
  //     padding: 2px 0;
  //     &::before {
  //       content: ' ';
  //       width: 100%;
  //       height: 3px;
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       box-shadow: inset 0px 15px 10px -15px #F2F2F2;
  //     }
  //     &::after {
  //       content: ' ';
  //       width: 100%;
  //       height: 3px;
  //       position: absolute;
  //       bottom: 0;
  //       left: 0;
  //       box-shadow: inset 0px -5px 10px -3px #F2F2F2;
  //     }
  //     // box-shadow: 0px 0px -3px 0px #F2F2F2;
  //   }
  // }
</style>
