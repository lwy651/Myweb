var router = require('koa-router')();
var upload = require('../lib/multerUtil');

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'upload'
  };
  //ctx.type = 'json';
  //ctx.body = {a:2};
  await ctx.render('upload', {
  });
})

router.post('/',upload.single('file') , async function (ctx, next){
	console.log('okokokokokokok');
	ctx.redirect('/upload');
});

module.exports = router;