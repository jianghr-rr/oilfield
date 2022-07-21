/**
 * @file CodePreview
 * @author xuemin02
 */

import React, {useState, useCallback} from 'react';
import {Button} from 'skd';

export default props => {
    const {children} = props;

    const [codeExpand, setCodeExpand] = useState(false);

    const handleCodeExpand = useCallback(() => setCodeExpand(prevCodeExpand => !prevCodeExpand), []);

    const codePreviewClass = codeExpand
        ? 'code-preview-expand'
        : 'code-preview';
    const codePreviewTitle = codeExpand ? '收起代码' : '查看代码';

    return (
        <div className="demo-code-preview">
            <div className="ctrl">
                <Button type="default" onClick={handleCodeExpand}>{codePreviewTitle}</Button>
            </div>
            <div className={codePreviewClass}>
                {children}
            </div>
        </div>
    );
};
