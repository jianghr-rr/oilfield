/**
 * @file ComponentDoc
 * @author xuemin02
 */

import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';

import Demo from './Demo';

const getDemoComponent = props => {
    const {pageData: {meta}, demos, utils: {toReactComponent}} = props;
    if (!demos) {
        return null;
    }
    // 是否独占整行展示，默认一个demo占据半行
    const isSingleCol = meta.cols === 1;
    const leftChildren = [];
    const rightChildren = [];
    Object.keys(demos)
        .map(key => demos[key])
        .sort((a, b) => a.meta.order - b.meta.order)
        .forEach((item, i) => {
            const content = toReactComponent(['div'].concat(item.content));
            const {title, component} = item.meta;
            const demoProps = {
                ...item,
                componentName: meta.title,
                key: i,
                title,
                component,
                content,
                code: toReactComponent(item.highlightedCode)
            };
            const demoElement = (
                <Demo {...demoProps}>
                    {item.preview(React, ReactDom)}
                </Demo>
            );
            if (i % 2 === 0 || isSingleCol) {
                leftChildren.push(demoElement);
            }
            else {
                rightChildren.push(demoElement);
            }
        });

    const demoWrapperClassName = classNames('demo-wrapper', {'demo-wrapper-single': isSingleCol});

    return (
        <div className={demoWrapperClassName}>
            <div className="demo-wrapper-left">{leftChildren}</div>
            {!isSingleCol && (
                <div className="demo-wrapper-right">{rightChildren}</div>
            )}
        </div>
    );
};

export default props => {
    const {pageData, utils: {toReactComponent}} = props;
    const {meta = {}, changelog, api, toc, content} = pageData;
    const {title, subTitle} = meta;
    const demoComponent = getDemoComponent(props);

    const docClassName = classNames('main-container', {
        'main-container-component': !!demoComponent
    });

    return (
        <div className={docClassName}>
            <div className="page-toc">
                {!toc || toc.length <= 1 ? null : toReactComponent(toc)}
            </div>
            <div className="page-content markdown">
                <h1>{title}  {subTitle}</h1>
                {toReactComponent(content)}
                {demoComponent}
                {api && (
                    <div className="page-api markdown">
                        {toReactComponent(api)}
                        {changelog && (
                            <div className="page-content markdown">
                                {toReactComponent(changelog)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
