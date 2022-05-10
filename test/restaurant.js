let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

describe("/GET restaurant's list by time", () => {
  it("it should GET all the restaurant filtered by time", (done) => {
    chai
      .request(server)
      .get("/api/restaurant/time")
      .query({ value: "Mon 11:30 am" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET restaurant's list by name", () => {
  it("it should GET all the restaurant filtered by name", (done) => {
    chai
      .request(server)
      .get("/api/restaurant/name")
      .query({ value: "Rose" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
