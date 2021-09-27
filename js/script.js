
    $(document).ready(function(){
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
        $nav = $("header ul li a");
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
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 5){
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
        moveCnt = $cnt.children("section").eq(index);
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

    //header 스크롤시 배경
    var offsetH = $("header").offset();
    $(window).scroll(function(){
      if($(document).scrollTop() > offsetH.top){
        $("header").addClass("fixed");
      }else{
        $("header").removeClass("fixed");
      }
    });

    //sect03 이벤트
    $(window).scroll(function(){
      var location = $(window).scrollTop();
      if(location >= $("#sect03").offset().top){
        $("#sect03").addClass("on");
      }
    });
    $(window).scroll(function(){
      var location = $(window).scrollTop();
      if(location >= $("#sect05").offset().top){
        $("#sect05").addClass("on");
      }
    });



      //메인 슬라이드
      var swiper = new Swiper(".mySwiper01", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: "#sect01 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#sect01 .swiper-button-next",
          prevEl: "#sect01 .swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mySwiper02", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#sect02 .swiper-button-next",
          prevEl: "#sect02 .swiper-button-prev",
        },
      });

      //ROOM
      var swiper = new Swiper(".mySwiper03", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: "#sect04 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#sect04 .swiper-button-next",
          prevEl: "#sect04 .swiper-button-prev",
        },
      });

     
    });//끝
