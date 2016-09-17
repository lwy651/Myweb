const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	_id     :{type:String},
	username :{type:String},
	password :{type:String},
	usericon :{type:String}
});

userSchema.static('findByUsername',function(username){
	
});

mongoose.model('Users',userSchema);