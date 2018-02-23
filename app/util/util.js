/**
 * 解析url参数
 * @example '?id=1234&collect=true'
 * @return object id:1234,collect:true
 */
export function loadUrl(url) {
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;
	let arr = url.match(reg);
	let i = 0;
	if(arr){
		for(;i<arr.length;i++){
			let str = arr[i].substring(1);
			let tempArr = str.split('=');
			let key = tempArr[0];
			let value = tempArr[1];
			obj[key] = value
		}
	}	
	return obj;
}
/**
 * 格式化时间戳
 * @example '111334343443,"yyyy-MM-dd hh:ss:mm"'
 * @return '2017-11-11 10:20:40'
 */
export function formatTime(time,fmt) {
	
	if(/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1,(time.getFullYear()+'').substr(4-RegExp.$1.length))
	}
	let o = {
		'M+':time.getMonth() + 1,
		'd+':time.getDate(),
		'h+':time.getHours(),
		'm+':time.getMinutes()
	}
	for(let k in o) {
		let str = `${k}`
		if(new RegExp(`(${k})`).test(fmt)){
		   let str = o[k] + ''
		   fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str))
		}
	}
	return fmt
}

function padLeftZero(str) {
	return ('00'+str).substr(str.length)
}

/**
 * 判断设备
 */
var browser={   
	versions: function(){   
		var u = navigator.userAgent, app = navigator.appVersion;   
		return {   
			trident: u.indexOf('Trident') > -1, //IE内核   
			presto: u.indexOf('Presto') > -1, //opera内核   
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核   
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核   
			mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端   
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端   
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器   
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器   
			iPad: u.indexOf('iPad') > -1, //是否iPad   
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部   
		};  
	}()  
}  
export function getVersions() {
	return browser.versions
}
