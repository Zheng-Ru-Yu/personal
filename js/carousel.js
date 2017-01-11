$(function() {
	$('#home').hover(
		function() {
			$('#home .arrow').css({
				'opacity': '1',
				'filter': 'opacity(100)'
			});
			$('#button').css({
				'opacity': '1',
				'filter': 'opacity(100)'
			});
		},
		function() {
			$('#home .arrow').css({
				'opacity': '0',
				'filter': 'opacity(0)'
			});
			$('#button').css({
				'opacity': '0',
				'filter': 'opacity(0)'
			});

		})
	var nowIdx = 0;
	$('#button li').on('click', function() {
		$(this).addClass('b-active').siblings().removeClass('b-active');
		nowIdx = $(this).index();
		$('#carousel li:eq(' + nowIdx + ')').addClass('show').siblings().removeClass('show');


	});
	$('.arrow-left').on('click', function() {
		nowIdx--;
		if (nowIdx == -1) {
			nowIdx = 2;
		}
		change(nowIdx);
	});

	$('.arrow-right').on('click', function() {
		nowIdx++;
		if (nowIdx == 3) {
			nowIdx = 0;
		}
		change(nowIdx);

	});
	var timer = setInterval(function() {
		$('.arrow-right').trigger('click');
	}, 4000);
	$('.arrow,#button').on('mouseover', function() {
		clearInterval(timer);
	});
	$('.arrow,#button').on('mouseout', function() {
		clearInterval(timer)
		timer = setInterval(function() {
			$('.arrow-right').trigger('click');
		}, 4000);
	});

	function change(nowIdx) {
		$('#button li:eq(' + nowIdx + ')').addClass('b-active').siblings().removeClass('b-active');
		$('#carousel li:eq(' + nowIdx + ')').addClass('show').siblings().removeClass('show');
	}



});