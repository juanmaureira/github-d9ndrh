const request = require('supertest');
const app = require('../app');
const test = require('ava');

test('should pass', (t) => {
  t.pass();
});

test('save valid user data', (t) => {
  const user = { name: 'john', email: 'johnDoe@mail.com' };
  request(app)
    .post('/users')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
    });
});
