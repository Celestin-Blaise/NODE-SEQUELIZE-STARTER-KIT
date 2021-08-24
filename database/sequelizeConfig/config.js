const fs = require('fs');

module.exports = {

    "development": {
      "username": "root",
      "password": "root1234",
      "database": "nodesequelize",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "define": {
        "timestamps": true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
      }
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }

};


