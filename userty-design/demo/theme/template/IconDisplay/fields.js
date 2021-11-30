import manifest from './displayManifest';
import {oilIcons, directionIcons, suggestionIcons, editorIcons} from './icons';

let allIcons = [];
Object.keys(manifest).forEach(theme => {
  allIcons = [...allIcons, ...manifest[theme]];
});

// Hide typo-name icons
allIcons = allIcons.filter(name => !['interation', 'canlendar', 'colum-height'].includes(name));

const categories = {
  all: [...new Set(allIcons)],
  oil: oilIcons,
  direction: directionIcons,
  suggestion: suggestionIcons,
  editor: editorIcons,
  logo: [
    'android',
    'apple',
    'windows',
    'ie',
    'chrome',
    'github',
    'aliwangwang',
    'dingding',
    'weibo-square',
    'weibo-circle',
    'taobao-circle',
    'html5',
    'weibo',
    'twitter',
    'wechat',
    'youtube',
    'alipay-circle',
    'taobao',
    'skype',
    'qq',
    'medium-workmark',
    'gitlab',
    'medium',
    'linkedin',
    'google-plus',
    'dropbox',
    'facebook',
    'codepen',
    'code-sandbox',
    'code-sandbox-circle',
    'amazon',
    'google',
    'codepen-circle',
    'alipay',
    'ant-design',
    'ant-cloud',
    'aliyun',
    'zhihu',
    'slack',
    'slack-square',
    'behance',
    'behance-square',
    'dribbble',
    'dribbble-square',
    'instagram',
    'yuque',
    'alibaba',
    'yahoo',
    'reddit',
    'sketch',
  ],
};

export default categories;
