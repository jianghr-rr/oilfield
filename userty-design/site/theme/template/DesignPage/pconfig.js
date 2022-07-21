/**
 * @file ThemeDesign
 * @author dailin
 */

import React from 'react';

const KeyList = Array.apply(null, {length: 42}).map((item, idx) => `p${idx}`);

const PConfig = React.memo(() => {
    return (
        <div className="theme-tpconfig">
            {
                KeyList.map(key => (
                    <div key={key} className="container">
                        <div>{`${key.toUpperCase()}`}</div>
                        <div className="list-item">
                            <div className={`show-${key}`} />
                            <div className={`show-${key}`} disabled />
                        </div>
                        <div className="list-item dark">
                            <div className={`show-${key}`} />
                            <div className={`show-${key}`} disabled />
                        </div>
                    </div>
                ))
            }
        </div>
    );
});

export default PConfig;