import * as React from 'react';
import Icon, * as AntdIcons from '@ant-design/icons';
import { Radio, Input } from 'skd';
import { RadioChangeEvent } from 'skd/es/radio/interface';
import debounce from 'lodash/debounce';
import Category from './Category';
import IconPicSearcher from './IconPicSearcher';
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';
import { categories, Categories, CategoriesKeys } from './fields';

export enum ThemeType {
  Filled = 'Filled',
  Outlined = 'Outlined',
  TwoTone = 'TwoTone',
}

const allIcons: {
  [key: string]: any;
} = AntdIcons;

interface IconDisplayProps {
  intl: any;
}

interface IconDisplayState {
  theme: ThemeType;
  searchKey: string;
}

class IconDisplay extends React.PureComponent<IconDisplayProps, IconDisplayState> {
  static categories: Categories = categories;

  static newIconNames: string[] = [];

  state: IconDisplayState = {
    theme: ThemeType.Outlined,
    searchKey: '',
  };

  constructor(props: IconDisplayProps) {
    super(props);
    this.handleSearchIcon = debounce(this.handleSearchIcon, 300);
  }

  handleChangeTheme = (e: RadioChangeEvent) => {
    this.setState({
      theme: e.target.value as ThemeType,
    });
  };

  handleSearchIcon = (searchKey: string) => {
    this.setState(prevState => ({
      ...prevState,
      searchKey,
    }));
  };

  renderCategories() {
    const { searchKey = '', theme } = this.state;

    return Object.keys(categories)
      .map((key: CategoriesKeys) => {
        let iconList = categories[key];
        if (searchKey) {
          iconList = iconList.filter(iconName =>
            iconName.toLowerCase().includes(searchKey.toLowerCase()),
          );
        }

        // CopyrightCircle is same as Copyright, don't show it
        iconList = iconList.filter(icon => icon !== 'CopyrightCircle');

        return {
          category: key,
          icons: iconList.map(iconName => iconName + theme).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category as CategoriesKeys}
          theme={theme}
          icons={icons}
          newIcons={IconDisplay.newIconNames}
        />
      ));
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Radio.Group
            value={this.state.theme}
            onChange={this.handleChangeTheme}
            size="large"
            buttonStyle="solid"
          >
            <Radio.Button value={ThemeType.Outlined}>
              <Icon component={OutlinedIcon} />
            </Radio.Button>
            <Radio.Button value={ThemeType.Filled}>
              <Icon component={FilledIcon} />
            </Radio.Button>
            <Radio.Button value={ThemeType.TwoTone}>
              <Icon component={TwoToneIcon} />
            </Radio.Button>
          </Radio.Group>
          <Input.Search
            style={{ margin: '0 10px', flex: 1 }}
            allowClear
            onChange={e => this.handleSearchIcon(e.currentTarget.value)}
            size="large"
            autoFocus
          />
        </div>
        {this.renderCategories()}
      </>
    );
  }
}

export default IconDisplay;
