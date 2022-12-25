const { spec } = require('pactum');

it('Testing tool', async() => {
    await spec()
        .get('https://jsonplaceholder.typicode.com/users/1')
        .expectStatus(200)
});