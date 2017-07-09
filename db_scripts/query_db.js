// Mondodb:
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/test'

// Function to query db for all markers:
var findMarkers = function(db, callback) {
   var cursor =db.collection('markers').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

var findCoordinates = function(db, callback) {
  var cursor =db.collection('markers').find({"markerInfo.xcoord": "-73.966666", "markerInfo.ycoord": "40.766666266"});
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
       console.dir(doc);
    } else {
       callback();
    }
  });
};

// Run query to find markers:
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  //findCoordinates(db, function() {});

  findMarkers(db, function() {});

  db.close();
});