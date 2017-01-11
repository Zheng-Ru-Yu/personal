$(function() {
	$('#project .mark1 .mark-right span').css({
		'line-height':$('.project img').outerHeight()+'px'
	})
	
	$('#project .project .mark1').css({
		'top':$('.project img').outerHeight()
	})
	// var $pH = $('.project img').outerHeight();
// 
	// $('#project .project .project-mark').css({
	// 	'top': $pH -47,
	// })
	// console.log($pH);
	// // console.log($('.project-mark .mark-right').outerHeight());
	// $('.project-mark .mark-right span').css({
	// 	'line-height':'47px'
	// })
	// $('.project').hover(
	// 	function(){
	// 		$('#project .project .project-mark').removeClass('down')

	// 		$('#project .project .project-mark').css({
	// 			'top':0,
	// 		})

	// 		$('.project-mark .mark-right span').css({
	// 			'line-height':$pH + 'px'
	// 		})
	// 	},
	// 	function(){
	// 		$('#project .project .project-mark').addClass('down')
	// 		$('#project .project .project-mark').css({
	// 			'top': $pH -47,
	// 		})
	// 		$('.project-mark .mark-right span').css({
	// 			'line-height':'47px'
	// 		})

	// 	}
	// 	);

	// var $pH = $('.project img').outerHeight();
	// var $pW = $('.project img').outerWidth();
	// // console.log($pH);
	// $('.project-mark').width($pW);

	//  $('.project').hover(

	// 	 	function(){
	// 			$('#project .project .project-mark').removeClass('down');
				
	// 	 			$('.project-mark').height($pH);
	// 				var $mH = $('.project-mark').outerHeight();
	// 				 $('.project-mark .mark-right span').css({
	// 					'line-height':$pH +'px',
	// 				})

	// 	 	},
	// 	 	function(){
	// 			$('#project .project .project-mark').addClass('down');

	// 	 			$('.project-mark').height(45);

	// 	 			 $('.project-mark .mark-right span').css({
	// 					'line-height':'45px',
	// 				})

		 		


	// 	 	}
	//  	);
// console.log( $('.project>img'));
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
				$('.project>img , .project-mark').on('click',function(){
					 location.href = $(this).parent().find('a').attr('href');

				})
				} else {
				
					 $('.project>img , .project-mark').hover(
					 	function(){
					 		// console.log(11);
					 		 $(this).parent().find('.mark1').css({
						 	 	'top':'0'

						 	 });
						 	 $(this).parent().find('.mark2').css({
						 	 	// 'opacity':'0',
						 	 	'transition': 'all 0.1s ease',
						 	 	'height':'0'

						 	 });
					 },
					 function(){
					 		 $(this).parent().find('.mark1').css({
								'top':$('.project img').outerHeight()
							})
					 		  $(this).parent().find('.mark2').css({
						 	 	// 'opacity':'1',
						 	 	'transition': 'all 0.2s ease 0.3s',


						 	 	'height':'45px'

						 	 });

					 });
				}







	












});