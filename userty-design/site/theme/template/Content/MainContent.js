/* eslint-disable @babel/new-cap */
/**
 * @file mainContent
 * @author xuemin02
 */

import _ from 'lodash';
import classnames from 'classnames';
import React, {Fragment} from 'react';
import {Link} from 'bisheng/router';
import {Popover} from 'skd';

import ComponentDoc from './ComponentDoc';
import {getMenuData, getComponentName} from '../utils';

const getMenuItems = ({menuData, selectedKey, level = 1}) => {
    const List = []; // 所有的menuItem
    let universalList = []; // 通用
    let navigationList = []; // 导航
    let dataEntryList = []; // 数据录入
    let dataDisplayList = []; // 数据展示
    let feedbackList = []; // 反馈
    let topList = []; // 顶部
    let bizList = []; // 业务代码
    let menuItemClassName = '';
    const paddingLeft = 20 + 5 * level;
    // 修改显示顺序
    function DisplayOrder(arr) {
        let newArr = arr.sort((x, y) => {
            return x.order - y.order;
        });
        return newArr;
    };
    _.map(menuData, menuItem => {
        const {title, subtitle, key, children, type} = menuItem;
        List.push(menuItem);
        if (type === '通用' || type === '布局') {
            universalList.push(menuItem);
        } else if (type === '导航') {
            navigationList.push(menuItem);
        } else if (type === '数据录入') {
            dataEntryList.push(menuItem);
        } else if (type === '数据展示') {
            dataDisplayList.push(menuItem);
        } else if (type === '反馈') {
            feedbackList.push(menuItem);
        } else if (type === '顶部') {
            topList.push(menuItem);
        }
        navigationList = DisplayOrder(navigationList);
        dataEntryList = DisplayOrder(dataEntryList);
        dataDisplayList = DisplayOrder(dataDisplayList);
        feedbackList = DisplayOrder(feedbackList);
        bizList = DisplayOrder(bizList);
        universalList = DisplayOrder(universalList);
        const titleText = _.upperFirst(title || getComponentName(key));

        const titleComp = (
            <Fragment>
                <span className="chinese">{subtitle}</span>
                <span className="chinese">{titleText}</span>
            </Fragment>
        );

        if (children && children.length) {
            const menuItems = getMenuItems({
                menuData: children,
                selectedKey,
                level: level + 1
            });
            return (
                <ul key={key} title={titleComp} style={{paddingLeft}}>
                    {menuItems}
                </ul>
            );
        }
        menuItemClassName = classnames('menu-site-item', {
            'menu-site-item-active': key === selectedKey
        });
        return (
            <li key={key} className={menuItemClassName} style={{paddingLeft}}>
                <Link to={key}>{titleComp}</Link>
            </li>
        );
    });
    // 封装渲染函数
    function Render(arr, title) {
        if (title) {

            const titleIcon = type => {
                const typeMap = {
                    1: '开发中',
                    2: '可走查',
                    3: '修改中',
                    4: '走查修改结束'
                };
                let titleTypeClassName = classnames('can-check', {
                    'can-check-1': type === 1,
                    'can-check-2': type === 2,
                    'can-check-3': type === 3,
                    'can-check-4': type === 4
                });
                console.log('type:::', type ? type : 1);
                return (
                    <Popover content={typeMap[type ? type : '1']}>
                        <span className={titleTypeClassName} />
                    </Popover>
                );
            };
            return <>
                <li className='menu-site-title' style={{paddingLeft}}>{title}</li>
                {arr.map(item => {
                    menuItemClassName = classnames('menu-site-item', {
                        'menu-site-item-active': item.key === selectedKey
                    });
                    return (
                        <li
                            key={item.key}
                            className={menuItemClassName}
                            style={{paddingLeft}}
                        >
                            <Link to={item.key}>
                                {titleIcon(item.check)}
                                <span>{item.subtitle}{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </>;
        }
        if (!title) {
            return <>
                {arr.map(item => {
                    menuItemClassName = classnames('menu-site-item', {
                        'menu-site-item-active': item.key === selectedKey
                    });
                    return (
                        <li
                            key={item.key}
                            className={menuItemClassName}
                            id='menu-site-top'
                            style={{paddingLeft}}
                        >
                            <Link to={item.key} ><font size='4'><span>{item.subtitle}</span></font></Link>
                        </li>
                    );
                })}
            </>;
        }
    };
    const topListDiv  = Render(topList, false);
    const universalListDiv  = Render(universalList, '通用');
    const navigationListDiv  = Render(navigationList, '导航');
    const dataEntryListDiv  = Render(dataEntryList, '数据录入');
    const dataDisplayListDiv  = Render(dataDisplayList, '数据展示');
    const feedbackListDiv  = Render(feedbackList, '反馈');
    return (
        <div className='menu-site-div'>
            {topListDiv}
            <div className='lineDiv'></div>
            {universalListDiv}
            {navigationListDiv}
            {dataEntryListDiv}
            {dataDisplayListDiv}
            {feedbackListDiv}
        </div>
    );
};

export default props => {

    const {
        location: {pathname}
    } = props;

    const selectedKey = pathname.replace(/\/$/, '');
    const menuData = getMenuData(props);
    const menuItems = getMenuItems({menuData, selectedKey});
    return (
        <div className="main-wrapper">
            <ul className="aside-container menu-site">{menuItems}</ul>
            <div className="content-container">
                <ComponentDoc {...props} />
            </div>
        </div>
    );
};
