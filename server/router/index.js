

const Router = require('koa-router');
//服务端向后端调接口
const commonController = require('../middleware/commonController')

//服务端api定义
let router = new Router();

router.get('/api/course',commonController);


module.exports = router;