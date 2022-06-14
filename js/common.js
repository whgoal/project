var mybutton = document.getElementById("myBtn");
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //   mybutton.style.display = "block";
  } else {
  //   mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ~~~~~~~~~~~~~~~~~~~~~~ 이미지 슬라이드

$(document).ready(function(){
    var $dot = $("#dot ul li");
    var slideIndex = 0;
    var len = $(".slide li").length;

    $(".prev").on("click", function(){
      slideIndex -= 1; 
      if( slideIndex < 0 ) { slideIndex = len - 1; }
      if( slideIndex >= len ) { slideIndex = 0 ;} 
      console.log(slideIndex);
      $(".slide").animate({marginLeft:-1920 * slideIndex });
      $dot.css({background:"#DEDEDE"});
      $dot.eq(slideIndex).css({background:"#707070"});
    });

    $(".next").on("click", function(){
      slideIndex += 1; 
      if( slideIndex < 0 ) { slideIndex = len - 1; }
      if( slideIndex >= len ) { slideIndex = 0 ;} 
      $(".slide").animate({marginLeft:-1920 * slideIndex});
       $dot.css({background:"#DEDEDE"});
      $dot.eq(slideIndex).css({background:"#707070"});
    });

  $dot.on("click",function(){
    $(".slide").animate({marginLeft:-1920 * $(this).index()});
    $dot.css({"background":"#DEDEDE"});
    $(this).css({"background":"#707070"});
    slideIndex = $(this).index(); console.log(slideIndex);
  });

 }); // ready end


//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 메뉴 이동

var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".content");
        $nav = $(".header a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 3){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};

scroll();


// ~~~~~~~~~~~~~~~~~~~~~~~~~ scroll fade in

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
});