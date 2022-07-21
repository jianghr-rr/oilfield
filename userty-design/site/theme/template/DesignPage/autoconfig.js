/**
 * @file ThemeDesign
 * @author dailin
 */

import React from 'react';
import {Button} from 'skd';
// import axios from 'axios';

const AutoConfig = React.memo(() => {
    // const postMD = () => {
    //     axios.post('http://localhost:3010/config', {
    //         config: {
    //             B6: '#FFF'
    //         }
    //     });
    // }
    return (
        <Button type="primary">主按钮</Button>
    );
});

export default AutoConfig;
