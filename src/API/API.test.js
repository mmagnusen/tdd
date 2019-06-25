import API from '../API'
import data from '../__mocks__/data'

it('calls axios and returns posts', () => {
    const myApi = new API()
    let responseData = null;
    myApi.createEntity({name: 'posts', useMock: true})
    myApi.endpoints.posts.getPosts('')
    .then(response => {
        responseData = response;
        console.log('from tests', responseData)
        expect(response.data).toBe(data);
    })
})