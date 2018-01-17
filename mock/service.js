var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
var router =  Router();

app.use(router['routes']());

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

app.use(router.routes())
   .use(router.allowedMethods());
   
app.listen(3000);
