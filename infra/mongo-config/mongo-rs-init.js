rs.initiate({ _id: "rs0", members: [{ _id: 0, host: "mongo-0.mongo-svc:27017" }, { _id: 1, host: "mongo-1.mongo-svc:27017" }] })

//  rs.secondaryOk()