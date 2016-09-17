var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '小五的博客'
  };
  //ctx.type = 'json';
  //ctx.body = {a:2};
  await ctx.render('index', {
  });
})

module.exports = router;
