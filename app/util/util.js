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