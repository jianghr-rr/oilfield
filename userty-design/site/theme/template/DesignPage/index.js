/**
 * @file ThemeDesign
 * @author dailin
 */

import React, {useState, useEffect, Fragment} from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import {Link} from 'bisheng/router';

import {menuData, ComponentMap} from './routerConfig';

import './index.less';

const getMenuItems = ({menuData, selectedKey, level = 1}) => {
    const paddingLeft = 20 + (20 * level);

    return _.map(menuData, menuItem => {
        const {title, subTitle, key, children} = menuItem;

        const titleComp = (
            <Fragment>
                <span>{title}</span>
                <span className="chinese">{subTitle}</span>
            </Fragment>
        );

        if (children && children.length) {
            const menuItems = getMenuItems({menuData: children, selectedKey, level: level + 1});
            return (
                <ul key={key} title={titleComp} style={{paddingLeft}}>
                    {menuItems}
                </ul>
            );
        }

        const menuItemClassName = classnames('menu-site-item', {
            'menu-site-item-active': key === selectedKey
        });

        return (
            <li key={key} className={menuItemClassName} style={{paddingLeft}}>
                <Link to={key}>{titleComp}</Link>
            </li>
        );
    });
};

const DesignPage = React.memo(props => {
    const {location: {pathname}} = props;
    const selectedKey = pathname.replace(/\/$/, '');
    const ShowContent = ComponentMap[selectedKey];

    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        const items =  getMenuItems({menuData, selectedKey});
        setMenuItems(items);
    }, [selectedKey]);

    return (
        <div className="main-wrapper">
            <ul className="aside-container menu-site">
                {menuItems}
            </ul>
            <div className="design-content-container">
                <div className="theme-box">
                    <ShowContent />
                </div>
            </div>
        </div>
    );
});

export default DesignPage;