$(function() {
   

          $('#nav a').on("click", function () {
            var href = $(this).attr('href'); //其实取到的是链接所对应的div
            $(document.body).animate({
                scrollTop: $(href).offset().top
            }, 500);
            $(document.documentElement).animate({
                scrollTop:  $(href).offset().top
            }, 500);
            history.pushState($(href).offset().top, '');
            return false; //取消矛点的作用


        });

        window.onpopstate = function (e) {
            $(document.body).animate({
                scrollTop: e.state
            }, 1000);
            $(document.documentElement).animate({
                scrollTop: e.state
            }, 1000);

        };
         // $('.nav-active').click();
       




});
