'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = exports.Upload = exports.Timeline = exports.Tag = exports.Transfer = exports.Table = exports.Switch = exports.Steps = exports.Spin = exports.Select = exports.Row = exports.Rate = exports.Radio = exports.Progress = exports.Pagination = exports.Modal = exports.Menu = exports.List = exports.InputNumber = exports.Input = exports.Icon = exports.Form = exports.Dropdown = exports.DatePicker = exports.Col = exports.Card = exports.Calendar = exports.Button = exports.Avatar = exports.Alert = exports.notification = exports.message = undefined;

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _col = require('./col');

var _col2 = _interopRequireDefault(_col);

var _datePicker = require('./date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _inputNumber = require('./input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _index = require('./list/index.jsx');

var _index2 = _interopRequireDefault(_index);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _rate = require('./rate');

var _rate2 = _interopRequireDefault(_rate);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _spin = require('./spin');

var _spin2 = _interopRequireDefault(_spin);

var _steps = require('./steps');

var _steps2 = _interopRequireDefault(_steps);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _transfer = require('./transfer');

var _transfer2 = _interopRequireDefault(_transfer);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _timeline = require('./timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  console.warn('You are using a whole package of antd, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */

// import { default as Affix } from './affix';

// import { default as Anchor } from './anchor';

// import { default as AutoComplete } from './auto-complete';

// import { default as BackTop } from './back-top';

// import { default as Badge } from './badge';

// import { default as Base } from './base';

// import { default as Breadcrumb } from './breadcrumb';

// import { default as Collapse } from './collapse';

// import { default as Carousel } from './carousel';

// import { default as Cascader } from './cascader';

// import { default as Checkbox } from './checkbox';

// import { default as Divider } from './divider';

// import { default as FormModel } from './form-model';

// import { default as Layout } from './layout';

// import { default as LocaleProvider } from './locale-provider';

// import { default as Mentions } from './mentions';

// import { default as Popconfirm } from './popconfirm';

// import { default as Popover } from './popover';

// import { default as Slider } from './slider';

// import { default as Statistic } from './statistic';

// import { default as Tree } from './tree';

// import { default as TreeSelect } from './tree-select';

// import { default as Tabs } from './tabs';

// import { default as TimePicker } from './time-picker';

// import { default as Tooltip } from './tooltip';

// import { default as version } from './version';

// import { default as Skeleton } from './skeleton';

// import { default as Comment } from './comment';

// import { default as ConfigProvider } from './config-provider';

// import { default as Empty } from './empty';

// import { default as Descriptions } from './descriptions';
// import { default as PageHeader } from './page-header';
// import { default as Space } from './space';

var components = [
// Base,
// Affix,
// Anchor,
// AutoComplete,
_alert2['default'], _avatar2['default'],
// BackTop,
// Badge,
// Breadcrumb,
_button2['default'], _calendar2['default'], _card2['default'],
// Collapse,
// Carousel,
// Cascader,
// Checkbox,
_col2['default'], _datePicker2['default'],
// Divider,
_dropdown2['default'], _form2['default'],
// FormModel,
_icon2['default'], _input2['default'], _inputNumber2['default'],
// Layout,
_index2['default'],
// LocaleProvider,
_menu2['default'],
// Mentions,
_modal2['default'], _pagination2['default'],
// Popconfirm,
// Popover,
_progress2['default'], _radio2['default'], _rate2['default'], _row2['default'], _select2['default'],
// Slider,
_spin2['default'],
// Statistic,
_steps2['default'], _switch2['default'],
// Table,
_transfer2['default'],
// Tree,
// TreeSelect,
// Tabs,
_tag2['default'],
// TimePicker,
_timeline2['default'],
// Tooltip,
_upload2['default'], _drawer2['default'],
// Skeleton,
// Comment,
// // ColorPicker,
// ConfigProvider,
// Empty,
_result2['default']];

var install = function install(Vue) {
  components.map(function (component) {
    Vue.use(component);
  });

  Vue.prototype.$ommessage = _message2['default'];
  Vue.prototype.$omnotification = _notification2['default'];
  Vue.prototype.$ominfo = _modal2['default'].info;
  Vue.prototype.$omsuccess = _modal2['default'].success;
  Vue.prototype.$omerror = _modal2['default'].error;
  Vue.prototype.$omwarning = _modal2['default'].warning;
  Vue.prototype.$omconfirm = _modal2['default'].confirm;
  Vue.prototype.$omdestroyAll = _modal2['default'].destroyAll;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.message = _message2['default'];
exports.notification = _notification2['default'];
exports.Alert = _alert2['default'];
exports.Avatar = _avatar2['default'];
exports.Button = _button2['default'];
exports.Calendar = _calendar2['default'];
exports.Card = _card2['default'];
exports.Col = _col2['default'];
exports.DatePicker = _datePicker2['default'];
exports.Dropdown = _dropdown2['default'];
exports.Form = _form2['default'];
exports.Icon = _icon2['default'];
exports.Input = _input2['default'];
exports.InputNumber = _inputNumber2['default'];
exports.List = _index2['default'];
exports.Menu = _menu2['default'];
exports.Modal = _modal2['default'];
exports.Pagination = _pagination2['default'];
exports.Progress = _progress2['default'];
exports.Radio = _radio2['default'];
exports.Rate = _rate2['default'];
exports.Row = _row2['default'];
exports.Select = _select2['default'];
exports.Spin = _spin2['default'];
exports.Steps = _steps2['default'];
exports.Switch = _switch2['default'];
exports.Table = _table2['default'];
exports.Transfer = _transfer2['default'];
exports.Tag = _tag2['default'];
exports.Timeline = _timeline2['default'];
exports.Upload = _upload2['default'];
exports.Result = _result2['default'];
exports['default'] = {
  // version,
  install: install
};