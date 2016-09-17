const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var blogSchema = new Schema({
	_id     :{type:String},
	title :{type:String},
	text :{type:String},
	time :{type:String},
	author :{type:String}
});

mongoose.model('Blogs',blogSchema);