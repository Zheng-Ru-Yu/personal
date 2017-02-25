 	$(function() {
 	    var flag = false;
 	    window.addEventListener('scroll', function() {
 	        var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 	        var iBodyHeight = $('body').height();

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
				var sHeight = 10;
				// console.log(iBodyHeight);
			} else {
				var sHeight = iBodyHeight + 200;
			}


 	        if (iScrollTop >= sHeight && flag == false) {
 	            fillball("drawing1", $('#drawing1').data('percent'), $('#drawing1').data('color'));
 	            fillball("drawing2", $('#drawing2').data('percent'), $('#drawing2').data('color'));
 	            fillball("drawing3", $('#drawing3').data('percent'), $('#drawing3').data('color'));
 	            fillball("drawing4", $('#drawing4').data('percent'), $('#drawing4').data('color'));
 	            fillball("drawing5", $('#drawing5').data('percent'), $('#drawing5').data('color'));
 	            fillball("drawing6", $('#drawing6').data('percent'), $('#drawing6').data('color'));
 	            fillball("drawing8", $('#drawing8').data('percent'), $('#drawing8').data('color'));
 	            fillball("drawing9", $('#drawing9').data('percent'), $('#drawing9').data('color'));
 	            fillball("drawing10", $('#drawing10').data('percent'), $('#drawing10').data('color'));
 	            fillball("drawing11", $('#drawing11').data('percent'), $('#drawing11').data('color'));
 	            fillball("drawing12", $('#drawing12').data('percent'), $('#drawing12').data('color'));
 	            fillball("drawing13", $('#drawing13').data('percent'), $('#drawing13').data('color'));
 	            flag = true;
 	        }
 	    });

 	    function fillball(id, value, color) {
 	        var canvas = document.getElementById(id);
 	        var width = canvas.width = 80;
 	        var height = canvas.height = 80;
 	        var count = 0;
 	        linewidth = 5;
 	        var interval = 1800 / value;
 	        R = (width - 2 * linewidth) / 2;
 	        var context = canvas.getContext('2d');

 	        function render(context) {

 	            context.clearRect(0, 0, width, height);
 	            context.beginPath();
 	            context.lineWidth = linewidth;
 	            context.strokeStyle = "#dfe0e0";
 	            context.arc(1 / 2 * width, 1 / 2 * height, R, 0, 2 * Math.PI);
 	            context.stroke();
 	            context.closePath();
 	            context.strokeStyle = color;
 	            context.beginPath()
 	            context.arc(1 / 2 * width, 1 / 2 * height, R, Math.PI / 2 - (count * 2 * Math.PI) / 200, Math.PI / 2 + (count * 2 * Math.PI) / 200)
 	            context.stroke()

 	            context.font = "bold 15pt Arial"; // 字体大小，样式
 	            context.fillStyle = color; // 颜色
 	            context.textAlign = 'center'; // 位置
 	            context.textBaseline = 'middle';
 	            context.fillText(count + "%", 1 / 2 * width, 1 / 2 * height);
 	            if (count < value) {
 	                count++;
 	            } else {
 	                clearInterval(timer);
 	            }
 	        }
 	        render(context);

 	        var timer = setInterval(function() {
 	            render(context);
 	        }, interval);

 	    }



 	});
 	// var el = $('.one'),
 	//     newone = el.clone(true);
 	// el.before(newone);
  //   console.log(newone);
 	// // $("#" + el.attr("id") + ":first").remove();


 	$('#time-line').width($('.axle').length * 205);
 	console.log($('#time-line').width());

 	var timer1;
 	move();
 	$('.axle').on('mouseover', function(){
 	    clearInterval(timer1);
 	});
 	$('.axle').on('mouseout', function() {
 	    move();
 	});
 	// console.log($('#time-line').width() / 2);

 	function move() {
 	    timer1 = setInterval(function() {
 	        $('#time-line').css({
 	            'right': parseInt($('#time-line').css("right")) - 1
 	        });

 	// console.log(-parseInt($('#time-line').css("right")));

 	        if (-parseInt($('#time-line').css("right")) >= $('#time-line').width()/2-1) {
 	            // console.log(123);
 	            $('#time-line').css({
 	                'right': '3px'
 	            });
 	        }

 	    }, 25);
 	};