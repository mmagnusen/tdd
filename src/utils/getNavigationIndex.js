import { URL_MAP } from '../constants';

export const getNavigationIndex = (parent, value) => {
    const map = URL_MAP[parent];
    return parseInt(Object.keys(map).find(key => map[key] === value));
};