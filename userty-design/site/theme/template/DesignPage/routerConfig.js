/**
 * @file ThemeDesign
 * @author dailin
 */

import DesignColor from './color';
import TPConfig from './tpconfig';
import PConfig from './pconfig';
import Autoconfig from './autoconfig';

export const menuData = [{
    category: 'theme',
    key: 'theme/color',
    subtitle: '基础色板',
    title: '基础色板'
}, {
    category: 'theme',
    key: 'theme/TP',
    subtitle: 'TP配置',
    title: 'TP配置'
}, {
    category: 'theme',
    key: 'theme/P',
    subtitle: 'P配置',
    title: 'P配置'
}, {
    category: 'theme',
    key: 'theme/autoConfig',
    subtitle: '配置面板',
    title: '配置面板'
}];

export const ComponentMap = {
    'theme/P': PConfig,
    'theme/TP': TPConfig,
    'theme/color': DesignColor,
    'theme/autoConfig': Autoconfig
};