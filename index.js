var koa = require('koa')
const fs = require('fs');
var staticServer=require('koa-static')
var path=require('path')

//
var koaRouter = require('koa-router');

var action={
    async init(ctx,next){
    	ctx.response.type = 'html';
		ctx.response.body = fs.createReadStream('./index.html');
        
    }
}

function route(router){  //这里的参数router是接收自app.js文件里面的koa-router实例
    router.all('/',async (ctx,next)=>{//可以匹配所有的请求路由，ctx是koa中的上下文
        action.init(ctx,next)
    })
    return router  //return经过处理的router实例
}



var app=new koa()  //实例化一个koa

const main = staticServer(path.join(__dirname));
app.use(main);

var router=new koaRouter()  //实例化一个koaRouter


router=route(router)  //对router添加所有的匹配对象
app.use(router.routes())  //加载router中间件
app.listen(80)  