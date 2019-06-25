import data from './data'

export default {
    get: jest.fn(() => Promise.resolve({data: data}))
};