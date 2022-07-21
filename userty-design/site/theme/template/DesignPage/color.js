/**
 * @file ThemeDesign
 * @author dailin
 */

import React from 'react';

const ColorInfo = [
    {key: 'G', title: '中性色'},
    {key: 'B', title: '主色'},
    {key: 'E', title: '错误色'},
    {key: 'S', title: '通过色'},
    {key: 'W', title: '警示色'}
];

const KeyList = Array.from(new Array(10).keys()).map(x => x + 1);

export default React.memo(() => (
    <div className="theme-color">
        {
            ColorInfo.map(item => (
                <div key={item.key} className={`container color-group-${item.key}`}>
                    {item.title}
                    {
                        KeyList.map(key => (
                            <div key={key} className="item-container">
                                <span>{`${item.key}${key}`}</span>
                                <div className={`item color-${key}`} />
                            </div>
                        ))
                    }
                </div>)
            )
        }
    </div>
));
