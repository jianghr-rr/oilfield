import manifest from '@ant-design/icons/lib/manifest';
import {fillIcons} from './icons';

export default {
    ...manifest,
    outline: [...fillIcons, ...manifest.outline]
};
