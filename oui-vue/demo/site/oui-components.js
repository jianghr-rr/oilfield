import Vue from 'vue';
import {
  //   Affix,
  //   Anchor,
  //   AutoComplete,
  Alert,
  Avatar,
  //   BackTop,
  //   Badge,
  //   Breadcrumb,
  Button,
  Calendar,
  Card,
  //   Collapse,
  //   Carousel,
  //   Cascader,
  //   Checkbox,
  //   Col,
  //   DatePicker,
  //   Divider,
  Dropdown,
  Form,
  //   FormModel,
  Icon,
  Input,
  InputNumber,
  //   Layout,
  //   List,
  //   LocaleProvider,
  message,
  Menu,
  //   Mentions,
  Modal,
  notification,
  Pagination,
  //   Popconfirm,
  //   Popover,
  Progress,
  //   Radio,
  Rate,
  //   Row,
  //   Select,
  //   Slider,
  Spin,
  //   Statistic,
  Steps,
  Switch, 
  Table,
  Transfer,
  //   Tree,
  //   TreeSelect,
  //   Tabs,
  Tag,
  //   TimePicker,
  Timeline,
  //   Tooltip,
  //   // Mention,
  Upload,
  //   // version,
  //   Drawer,
  //   Skeleton,
  //   Comment,
  //   ConfigProvider,
  //   Empty,
  //   Base,
  //   Result,
  //   Descriptions,
  //   PageHeader,
  //   Space,
  // ColorPicker,
  LoginPage
} from '../../components';

Vue.prototype.$ommessage = message;
Vue.prototype.$omnotification = notification;
Vue.prototype.$ominfo = Modal.info;
Vue.prototype.$omsuccess = Modal.success;
Vue.prototype.$omerror = Modal.error;
Vue.prototype.$omwarning = Modal.warning;
Vue.prototype.$omconfirm = Modal.confirm;
Vue.prototype.$omdestroyAll = Modal.destroyAll;

/* v1.1.3+ registration methods */
// Vue.use(Base);
// Vue.use(Affix);
// Vue.use(Anchor);
// Vue.use(AutoComplete);
Vue.use(Alert);
Vue.use(Avatar);
// Vue.use(BackTop);
// Vue.use(Badge);
// Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Card);
// Vue.use(Collapse);
// Vue.use(Carousel);
// Vue.use(Cascader);
// Vue.use(Checkbox);
// Vue.use(Col);
// Vue.use(DatePicker);
// Vue.use(Divider);
// Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(Form);
// Vue.use(FormModel);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
// Vue.use(Layout);
// Vue.use(List);
// Vue.use(LocaleProvider);
Vue.use(Menu);
// Vue.use(Mentions);
Vue.use(Modal);
Vue.use(Pagination);
// Vue.use(Popconfirm);
// Vue.use(Popover);
Vue.use(Progress);
// Vue.use(Radio);
Vue.use(Rate);
// Vue.use(Row);
// Vue.use(Select);
// Vue.use(Slider);
Vue.use(Spin);
// Vue.use(Statistic);
Vue.use(Steps);
Vue.use(Switch);
Vue.use(Table);
Vue.use(Transfer);
// Vue.use(Tree);
// Vue.use(TreeSelect);
// Vue.use(Tabs);
Vue.use(Tag);
// Vue.use(TimePicker);
Vue.use(Timeline);
// Vue.use(Tooltip);
Vue.use(Upload);
// Vue.use(Skeleton);
// Vue.use(Comment);
// Vue.use(ConfigProvider);
// Vue.use(Empty);
// Vue.use(Result);
// Vue.use(Descriptions);
// Vue.use(PageHeader);
// Vue.use(Space);
// Vue.use(ColorPicker);
Vue.use(LoginPage);
