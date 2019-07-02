import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import data from '../__mocks__/data'
import Error from '../__mocks__/error'

//const useMock = process.env.NODE_ENV === 'test';
const useMock = true;

class API {
    constructor(){
        this.endpoints = {};
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
    }

    createBasicCRUDEndpoints() {
        var endpoints = {};

        endpoints.getPosts = () => {

            if (useMock) {
                let mock = new MockAdapter(axios);

                mock.onGet('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/').reply(400, Error)
            }
            return axios.get('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/').then(response => response)
        }
        return endpoints;
    }
}

export default API;