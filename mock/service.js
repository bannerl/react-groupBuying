var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
var router =  Router();

app.use(router['routes']());

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
var homeAdList = require('./home/adList');
router.get('/api/homead',function (ctx,next){
	ctx.body = homeAdList;
});

/*首页猜你喜欢*/
var FavoriteList = require('./home/favoriteList');
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
var ShopDetail = require('./detail/detail');
router.get('/api/shop/:sellerid',function (ctx,next){
	var arr = ctx.url.split('/');
	var id = arr[arr.length-1].split('?')[0];
	var params = getQueryObject(ctx.url);
	ctx.body = ShopDetail[id-1];
});

/*热门搜索*/
var HotSearch = require('./searchPage/hotSearch');
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

app.use(router.routes())
   .use(router.allowedMethods());
   
app.listen(3000);
