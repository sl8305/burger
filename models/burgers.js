// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    // burger.all() - > make a database call to retrieve all burgers
  all: function(cb) {
    // orm.all() - > make a database call to retrieve all burgers
    // orm.all -> takes in 2 arguments, the table name and a callback function for when the data is returned
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // burger.delete is set to an anoymous function where we declare a condition and a cb
  delete: function(condition, cb) {
    // declare orm.delete and pass in the table to query (burgers), the condition(where to delete) and the callback function for what to do after the database call
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;
