const mongoose = require('mongoose');

var addr = 'mongodb://mongodb:27017/admin';
module.exports = mongoose.connect(addr, { 
  useNewUrlParser: true 
});
