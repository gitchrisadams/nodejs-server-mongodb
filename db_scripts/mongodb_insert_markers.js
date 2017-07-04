// Mondodb:
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27018/test'

var insertDocument = function(db, callback) {
   db.collection('markers').insertOne( {
      "markerInfo" : {
         "markerTitle" : "XY Test",
         "areaLost" : "Near XY",
         "itemDescription" : "XY Penny circa 1955",
         "xcoord" : "-73.966666", 
         "ycoord" : "40.766666266",
      },
      "address" : {
         "addressName" : "XY Tester",
         "addressStreetName" : "11XY Coastal Court",
         "addressCity" : "XY Place",
         "addressState" : "MA",
      },

   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the markers collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});