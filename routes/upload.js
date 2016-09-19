var router = require('koa-router')();
const path = require('path');
const parse = require('co-busboy');
const os = require('os');
var fs = require('fs');


router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'upload'
  };
  //ctx.type = 'json';
  //ctx.body = {a:2};
  await ctx.render('upload', {
  });
})

router.post('/', async function (ctx, next){
	var parts = parse(ctx);
	// or var parts = parse(ctx);
	var part;
	while (part = await parts.part()) {
		console.log(part);
	var stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
	console.log('part===>', part);
	part.pipe(stream);
	console.log('uploading %s -> %s', part.filename, stream.path);
	}
});

module.exports = router;