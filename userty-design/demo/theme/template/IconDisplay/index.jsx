import manifest from './displayManifest';
import Category from './Category';
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';
import categories from './fields';
import { Radio } from '../../../node_modules/ant-design-vue';
// import 'ant-design-vue/es/radio/style';

const IconDisplay = {
  cagetories: categories,
  newIconNames: [],

  themeTypeMapper: {
    filled: 'fill',
    outlined: 'outline',
    twoTone: 'twotone',
  },
  components: {
    ARadio: Radio,
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button,
  },
  data() {
    return {
      theme: 'outlined',
      searchKey: '',
    };
  },
  methods: {
    getComputedDisplayList() {
      return Object.keys(IconDisplay.cagetories)
        .map(category => ({
          category,
          icons: IconDisplay.cagetories[category].filter(
            name => manifest[IconDisplay.themeTypeMapper[this.theme]].indexOf(name) !== -1,
          ),
        }))
        .filter(({ icons }) => Boolean(icons.length));
    },

    handleChangeTheme(e) {
      this.theme = e.target.value;
    },

    renderCategories(list) {
      const { searchKey, theme } = this;
      const otherIcons = categories.all.filter(icon => {
        return list
          .filter(({ category }) => category !== 'all')
          .every(item => !item.icons.includes(icon));
      });
      const $list = list
        .filter(({ category }) => category !== 'all')
        .concat({ category: 'other', icons: otherIcons })
        .map(({ category, icons }) => ({
          category,
          icons: icons
            .filter(name => name.includes(searchKey))
            .filter(name => manifest[IconDisplay.themeTypeMapper[theme]].includes(name)),
        }))
        .filter(({ category, icons }) => {
          // console.log('category: ', category, !!icons.length || category !== 'other');
          return !!icons.length && category !== 'other';
        });
      console.log('$list: ', $list);
      return $list.map(({ category, icons }) => {
          return (
            <Category
              key={category}
              title={category}
              icons={icons}
              theme={this.theme}
              newIcons={IconDisplay.newIconNames}
            />
          );
        });
    },
    handleSearchIcon(val) {
      this.searchKey = val;
    },
  },

  render() {
    const list = this.getComputedDisplayList();
    return (
      <div>
        {this.renderCategories(list)}
      </div>
    );
  },
};

export default IconDisplay;
