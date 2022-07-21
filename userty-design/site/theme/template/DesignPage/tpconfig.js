/**
 * @file ThemeDesign
 * @author dailin
 */

import React from 'react';

const KeyList = Array.apply(null, {length: 36}).map((item, idx) => `tp${idx}`);

const TPConfig = React.memo(() => {
    return (
        <div className="theme-tpconfig">
            {
                KeyList.map(key => (
                    <div key={key} className="container" >
                        <div>{key.toUpperCase()}</div>
                        <div className="list-item">
                            <div className={`show-${key}`}>文字</div>
                            <div className={`show-${key}`} disabled>禁用</div>
                        </div>
                        <div className="list-item dark">
                            <div className={`show-${key}`}>文字</div>
                            <div className={`show-${key}`} disabled>禁用</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
});

export default TPConfig;