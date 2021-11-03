const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('server endpoint testing', () => {
  it('gets / endpoint', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
  });
  
  it('options /getData endpoint', async () => {
    const res = await request.options('/getData');
    expect (res.status).toBe(200);
    expect ('ok');
  })
  
  it('gets /getData endpoint', async () => {
    const res = await request.get('/getData');
    expect (res.status).toBe(200);
    expect (res.body.cryptoData);
  })
});




