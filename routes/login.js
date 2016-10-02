var router = require('koa-router')();
var connectDB = require('../controls/connectDB');

var usersDB = connectDB.users;

router.get('/', async function (ctx, next) {
	console.log('++++++++++++++++++');
  	ctx.state = {
    title: '登录'
  	};
  	await ctx.render('test', {
  	});
})

router.post('/', async function (ctx, next){
	await usersDB.findOne(ctx.request.body,function(err,doc){
		console.log(err+doc);
		if(err)
		{
			return ctx.redirect('/login');
		}
		else
		{
			if(doc)
			{
				return ctx.redirect('/');
			}
			else
			{
				return ctx.redirect('/login');
			}
		}
	});
})

module.exports = router;