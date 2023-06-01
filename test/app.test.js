const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');

chai.use(chaiHttp);
const expect = chai.expect;

describe('App', () => {
    it('should respond with status 200 on GET request to "/"', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});