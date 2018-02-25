var koa = require('koa')
const fs = require('fs');
var staticServer=require('koa-static')
var path=require('path')

//
var koaRouter = require('koa-router');

var action={
    async init(ctx,next){
    	ctx.response.type = 'html';
		ctx.response.body = fs.createReadStream('./build/index.html');
        
    }
}

function route(router){  //这里的参数router是接收自app.js文件里面的koa-router实例
    router.all('/',async (ctx,next)=>{//可以匹配所有的请求路由，ctx是koa中的上下文
        action.init(ctx,next)
    })
    return router  //return经过处理的router实例
}



var app=new koa()  //实例化一个koa

const main = staticServer(path.join(__dirname+'/build'));
app.use(main);

var router=new koaRouter()  //实例化一个koaRouter

function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);               
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}

/*首页广告*/
var homeAdList = require('./mock/home/adList');
router.get('/api/homead',function (ctx,next){
	ctx.body = homeAdList;
});

/*首页猜你喜欢*/
var FavoriteList = require('./mock/home/favoriteList');
router.get('/api/homelist/:city/:page',function (ctx,next){
	var result = [];
    for (var x = 0; x < Math.ceil(FavoriteList.length / 5); x++) {
        var start = x * 5;
        var end = start + 5;
        result.push(FavoriteList.slice(start, end));
    }
    
	if(ctx.url.substr(-1)-0<1){
		ctx.body = result[0];
	} else if(ctx.url.substr(-1)-0<5){
		ctx.body = result[1];
	} else {
		ctx.body = [];
	}
});

/*商品详情*/
var ShopDetail = require('./mock/detail/detail');
router.get('/api/shop/:sellerid',function (ctx,next){
	var arr = ctx.url.split('/');
	var id = arr[arr.length-1].split('?')[0];
	var params = getQueryObject(ctx.url);
	ctx.body = ShopDetail[id-1];
});

/*热门搜索*/
var HotSearch = require('./mock/searchPage/hotSearch');
router.get('/api/hotsearch',function (ctx,next){
	ctx.body = HotSearch;
});

/*搜索结果*/
router.get('/api/search',function (ctx,next){
	ctx.body = FavoriteList.slice(2,8);
});

/*登录*/
router.post('/api/login',function (ctx,next){
	ctx.body = {state:'success'};
});

/*订单*/
router.get('/api/user/orders',function(ctx,next) {
	ctx.body = FavoriteList.slice(3,7);
});

/*订单*/
router.get('/api/user/collection',function(ctx,next) {
	ctx.body = FavoriteList;
});

router=route(router)  //对router添加所有的匹配对象
app.use(router.routes())  //加载router中间件
app.listen(8080)  