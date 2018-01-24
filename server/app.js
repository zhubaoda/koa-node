require('babel-polyfill'); //支持一些浏览器不支持的原生功能的代码

const path = require('path'); //path.resolve路径巡航相当不断调用cd
const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const views = require('koa-views');

//const Router = require('koa-router');
//let router = new Router();
const router = require('./router/index');

//映射静态文件
app.use(static(path.join(__dirname, './dist')));
//渲染模板
app.use(views(path.join(__dirname, './dist'), {
	extension: 'ejs'
}));
//路由是*的就render   index
router.all('*', async ctx => {
    await ctx.render('index')
});

//固定模式吧
app.use(router.routes()).use(router.allowedMethods());
//服务端监听3000端口
var server = app.listen(3000);
console.log('app start at: ' + server.address().port);