var router = require('koa-router')();


router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'Main'
  };
  //ctx.type = 'json';
  //ctx.body = {a:2};
  await ctx.render('index', {
  });
})

module.exports = router;
