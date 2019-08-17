import { URL_MAP } from '../constants';

export const getNavigationIndex = (parent, value, course) => {
    const map = course ? URL_MAP.courses[course][parent] : URL_MAP[parent];
    return parseInt(Object.keys(map).find(key => map[key] === value));
};