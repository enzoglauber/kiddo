const restful = require('node-restful');
const mongoose =  restful.mongoose;

const languageSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String }
});

module.exports = restful.model('Language', languageSchema);