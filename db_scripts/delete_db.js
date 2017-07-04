var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27018/test';

/************** WARNING DELETES ENTIRE DB ***************/
var removeAllData = function(db, callback) {
   db.collection('markers').deleteMany(
      {},
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeAllData(db, function() {});

  db.close();
});