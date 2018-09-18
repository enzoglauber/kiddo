const Language = require('../model/language');
// 
Language.methods(['get', 'post', 'put', 'delete']);
Language.updateOptions({new: true, runValidators: true});
// 
module.exports = Language;