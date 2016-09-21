const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const favicon = require('koa-favicon');

const index = require('./routes/index');
const users = require('./routes/users');
const login = require('./routes/login');
const upload = require('./routes/upload');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

/*app.use(views(__dirname + '/views', {
  extension: 'jade'
}));*/
app.use(views(__dirname+'/views',{
  map:{
    html:'ejs'
  }
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

/*router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());*/
router.use('/login', login.routes(), login.allowedMethods());
router.use('/upload', upload.routes(), upload.allowedMethods());
router.use('/', index.routes(),index.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;