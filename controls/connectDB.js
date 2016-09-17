const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;
var db = mongoose.connect(config.db);
db.connection.on('error',console.error.bind(console,'数据库连接出差！！！'));
db.connection.on('open',function(){
  console.log('数据库连接成功');
});

require('./blog');
require('./user');

exports.blogs = mongoose.model('Blogs');
exports.users = mongoose.model('Users');