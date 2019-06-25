import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter'
import data from '../__mocks__/data'

class API {
    constructor(){
        this.endpoints = {};
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
    }

    createBasicCRUDEndpoints({ useMock }) {
        var endpoints = {};

        endpoints.getPosts = () => {

            if (useMock) {
                var mock = new MockAdapter(axios);

                mock.onGet('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/').reply(200, data)
            }
            return axios.get('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/').then(response => response)
        }
        return endpoints;
    }
}

export default API;