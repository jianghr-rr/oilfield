/**
 * @file Demo
 * @author xuemin02
 */

import React from 'react';
import classNames from 'classnames';
import CodePreview from './CodePreview';

export default props => {
    const {
        title,
        content,
        code,
        style,
        componentName = '',
        component = true,
        children
    } = props;
    console.log('title', title);
    const wrapperClassName = classNames('demo-item', {
        [`${componentName.toLowerCase()}-demo`]: !!componentName
    });

    return component ? (
        <div className={wrapperClassName}>
            <div className="demo-preview">
                {children}
                {style && (
                    <style dangerouslySetInnerHTML={{__html: style}} />
                )}
            </div>
            <div className="demo-info">
                <div className="demo-title">{title['zh-CN']}</div>
                <div className="demo-desc">{content}</div>
            </div>
            <div className="demo-code">
                <CodePreview
                    title={title['zh-CN']}
                    componentName={componentName}
                >
                    {code}
                </CodePreview>
            </div>
        </div>
    ) : (
        <div className="markdown">
            {content}
            {code}
        </div>
    );
};
