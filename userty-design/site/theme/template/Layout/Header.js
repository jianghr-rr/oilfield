/**
 * @file Header
 * @author xuemin02
 */

import _ from 'lodash';
import React from 'react';
import {Link} from 'bisheng/router';

import logo from '../../static/logo.png';

export default props => {
    return (
        <header className="header">
            <Link to="/docs/start" id="docs">
                <span>文档</span>
            </Link>
        </header>
    );
};
