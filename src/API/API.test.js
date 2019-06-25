import API from '../API'

it('calls axios and returns posts', () => {
    const myApi = new API()
    myApi.createEntity({name: 'posts', useMock: false})
    myApi.endpoints.posts.getPosts('')
    .then(response => {
        console.log('from tests', response)
    })
 
})