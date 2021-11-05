<script>
import { isZhCN } from '../utils/util';
import docsearch from 'docsearch.js';
import packageInfo from '../../package.json';

export default {
  inject: {
    demoContext: { default: {} },
  },
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      visibleAdblockBanner: !!this.demoContext.blocked,
      value: null,
      showTopBanner: !localStorage.getItem('notification-key-2.0'),
    };
  },
  watch: {
    'demoContex.blocked': function blocked(val) {
      this.visibleAdblockBanner = !!val;
    },
  },
  mounted() {
    this.initDocSearch(this.$i18n.locale);
  },
  methods: {
    handleClose(key) {
      localStorage.removeItem(`notification-key-${key}`);
      localStorage.setItem(`notification-key-${key}`, true);
      this.showTopBanner = false;
    },
    initDocSearch(locale) {},
    handleClick() {
      const name = this.name;
      const path = this.$route.path;
      const newName = isZhCN(name) ? name.replace(/-cn\/?$/, '') : `${name}-cn`;
      this.$router.push({
        path: path.replace(name, newName),
      });
      this.$i18n.locale = isZhCN(name) ? 'en-US' : 'zh-CN';
    },
    onSelect(val) {
      this.$router.push(val);
      this.value = val;
    },
    closeTopBanner() {},
  },
  render() {
    const name = this.name;
    const visibleAdblockBanner = false; // this.visibleAdblockBanner;
    const isCN = isZhCN(name);
    const path = this.$route.path;
    const selectedKeys = path === '/jobs/list-cn' ? ['jobs'] : ['components'];
    return (
      <div id="header" class="header">
        <div class="header-left">
          XinJiang Userty Design
        </div>
        <div class="header-right">
          <router-link class="guide" to="/homepage/guide">
            指南
          </router-link>
          <router-link class="theme" to="/homepage/theme/main">
            主题
          </router-link>
          <router-link class="component" to="/homepage/component">
            组件
          </router-link>
          <router-link class="resource" to="/homepage/resource">
            设计资源
          </router-link>
        </div>
      </div>
    );
  },
};
</script>

<style scope>
.header {
  height: 100px;
  font-size: 24px;
  display: flex;
  align-items: center;
}
</style>
