$(function() {
	var bIsFixed = false;
	var oFix = document.getElementById('nav');
	var iFixTop = oFix.offsetHeight;
	window.addEventListener('scroll',
		function() {
			var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (iScrollTop >= iFixTop && !bIsFixed) {
				oFix.className = "fixed";
				bIsFixed = true;
			} else if (iScrollTop < (iFixTop + 20) && bIsFixed) {
				oFix.className = "top";
				bIsFixed = false;
			}
			var sUserAgent = navigator.userAgent.toLowerCase();
			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			var bIsMidp = sUserAgent.match(/midp/i) == "midp";
			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			var bIsAndroid = sUserAgent.match(/android/i) == "android";
			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			// document.writeln("您的浏览设备为：");
			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
				var iBodyHeight = $('body').height() / 2;
				var rn = Math.ceil((iScrollTop - 10) / iBodyHeight);
				console.log(rn);
				$('#nav li:eq(' + rn + ')').children().addClass('nav-active').parent().siblings().children().removeClass('nav-active');
				
			} else {
				var iBodyHeight = $('body').height();
				var rn = Math.ceil((iScrollTop - 300) / iBodyHeight);
				$('#nav li:eq(' + rn + ')').children().addClass('nav-active').parent().siblings().children().removeClass('nav-active');
			}



		}



	);



});