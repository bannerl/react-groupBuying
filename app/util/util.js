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

/**
 * 阻止上拉下拉出现黑底
 */
if (!HTMLElement.currentStyle) {
    function _getStyle(prop) {
        var _s = window.getComputedStyle(this, null)
        return prop ? _s[prop] : _s;
    }
    HTMLElement.prototype.currentStyle = _getStyle;
    HTMLElement.prototype.getStyle = _getStyle;
}
// 阻止微信下拉出黑底插件
export function PreventScroll() {
    // // 非微信浏览器直接跳出 -- 后来发现好些浏览器都有这个坑，所以去掉
    // var ua = navigator.userAgent.toLowerCase();
    // if (!ua.match(/MicroMessenger/i)) return;
    var elem = arguments || []; // 传入绑定的元素
    var $elem = [];     // 存储所有需要监听的元素
 
    // 获取需要监听的元素
    for (var i=0,len=elem.length; i<len; i++) {
        var $e = document.querySelectorAll(elem[i]);
        if (!$e) {console.error('您输入的元素不对，请检查'); return;}
        for(var j=0; j<$e.length; j++) {
            if ($e[j].currentStyle('overflow').match(/auto|scroll/i)) {
                $elem.push($e[j]);
            }
        }
    }
    window.addEventListener('touchstart', function(e){
        window.scroll_start = e.touches[0].clientY;
    });
    window.addEventListener('touchmove', prevent);
	var a = '';
    function prevent(e) {
        var status = '11'; // 1容许 0禁止，十位表示向上滑动，个位表示向下滑动
        var startY = window.scroll_start;
        var currentY = e.touches[0].clientY;
        var direction = currentY - startY > 0 ? '10' : '01';  // 当前的滚动方向，10 表示向上滑动
		console.log($elem)
        $elem.forEach(function(ele){
            var scrollTop = ele.scrollTop,
                offsetHeight = ele.offsetHeight,
                scrollHeight = ele.scrollHeight;
 			console.log(scrollTop);
            if (scrollTop === 0) {
                // 到顶，禁止向下滑动，或高度不够，禁止滑动
                status = offsetHeight >= scrollHeight ? '00' : '01';
                a = status;
            } else if (scrollTop + offsetHeight >= scrollHeight) {
                // 到底，则禁止向上滑动
                status = '10';
            }
            
        });
 
        // output.innerHTML = status + ' ' + ++count;
        // 如果有滑动障碍，如到顶到底等
        if (status != '11') {
            if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                e.preventDefault();
                return;
            }
        }
    }
    return a;
}

