 function showNext(current, next) {
     $('#pnl' + current).fadeOut(300).removeClass('shown');
     $('#pnl' + next).fadeIn(300);
 }
 $(document).ready(function() {
     $("#show, video").click(function() {
         //$(".panel").toggle("slow");
         showNext(0, 1);
     });
     $('.nav-item > a').on('click', function(e) {
         $('.current').removeClass('current');
         $('.current-sub').removeClass('current-sub');
         $(this).addClass('current');
         $('.sub-items').fadeOut('fast');
         $(this).parent().find('.sub-items').fadeIn(200);
         $(this).parent().find('.sub-items a:first-child').addClass('current-sub');
     });

     $('.sub-items > a').on('click', function(e) {
         $('.current-sub').removeClass('current-sub');
         $(this).addClass('current-sub');
     });
 });
 $('.multi-item-carousel').carousel({
     interval: false
 });

 // $('#holo-carousel').carousel({

 //     interval: false,
 //     ride: true,
 //     pause: true
 // });

 $('.multi-item-carousel .item').each(function() {
     var next = $(this).next();
     if (!next.length) {
         next = $(this).siblings(':first');
     }
     next.children(':first-child').clone().appendTo($(this));
     if (next.next().length > 0) {
         next.next().children(':first-child').clone().appendTo($(this));
     } else {
         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     }

 });
 $(document).ready(function() {
     $('.navy a.round').click(function(e) {
         e.preventDefault();
         // alert($(this).data('bat'));

         var clicked = $(this).data('slide');
         var newSlide = $('#slide' + clicked);
         if (newSlide.hasClass('current-slide')) {
             return;
         } else {
             $('.current-slide').addClass('slide-right');
             newSlide.addClass('slide-right');
             $('.current-slide').addClass('hidden-slide').removeClass('current-slide');
             newSlide.removeClass('hidden-slide').addClass('current-slide').removeClass('slide-right');
             //$(".navy .current").removeClass('current');
             //$(this).addClass('current');
         }

     });




     function pr(btn) {
         var id = $(btn).attr('id');
         var nxt = (parseInt(id) + 1) % 3;
         var vid = document.getElementById(id);
         var nxtvid = document.getElementById(nxt);
         nxtvid.play();
         //toggleFullScreen(vid);
         toggleFullScreen(vid);
         toggleFullScreen(nxtvid);

         //toggleFullScreen(nxtvid);

     }

     function playpause(btn, vidid) {

         var vid = document.getElementById(vidid);
         if (vid.paused) {
             vid.play();

         } else {
             vid.pause();

         }

     }

     $('.video, .playpause').click(function() {
         if ($(this).parent().children(".video").get(0).paused) {
             $(this).parent().children(".video").get(0).play();
             toggleFullScreen($(this).parent().children(".video").get(0));
             $(this).parent().children(".playpause").fadeOut();
         } else {
             console.log('heeee');
             $(this).parent().children(".video").get(0).pause();
             $(this).parent().children(".playpause").fadeIn();
             toggleFullScreen($(this).parent().children(".video").get(0));
         }

     });

     function toggleFullScreen(elem) {
         if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
             (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
             (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
             (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
             if (elem.requestFullScreen) {
                 elem.requestFullScreen();
             } else if (elem.mozRequestFullScreen) {
                 elem.mozRequestFullScreen();
             } else if (elem.webkitRequestFullScreen) {
                 elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
             } else if (elem.msRequestFullscreen) {
                 elem.msRequestFullscreen();
             }
         } else {
             if (document.cancelFullScreen) {
                 document.cancelFullScreen();
             } else if (document.mozCancelFullScreen) {
                 document.mozCancelFullScreen();
             } else if (document.webkitCancelFullScreen) {
                 document.webkitCancelFullScreen();
             } else if (document.msExitFullscreen) {
                 document.msExitFullscreen();
             }
         }



     }

 });
 //document.addEventListener('contextmenu', event => event.preventDefault());