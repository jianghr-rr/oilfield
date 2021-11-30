import manifest from '@ant-design/icons/lib/manifest';
import {oilIcons, directionIcons, suggestionIcons, editorIcons} from './icons';

export default {
    ...manifest,
    outline: [...oilIcons, ...directionIcons, ...suggestionIcons, ...editorIcons, ...manifest.outline]
};
