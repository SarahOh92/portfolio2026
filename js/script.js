$(document).on('click', 'a[href="#]', function(e){e.preventDefault()})

// 01. 스플리팅 호출
$(function(){
    Splitting();
});

// 02. header 영역 스크롤 방향 이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
})

// 03. scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

// 04. svg path 길이구하기
$(function(){
    $('.svgani').find('#svgAni08').each(function(i,path){
        var length = path.getTotalLength();
        // alert(length);
    })
})

// .con01 gsap 애니매이션
$(function(){
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con01', // 트리거 대상
            start: '0% 0%', // 트리거 대상의 0%와 브라우저의 80%가 만날때 애니매이션이 시작됨
            end: '0% 20%', // 트리거 대상의 100%와 브라우저의 100%가 만날때 애니메이션이 종료됨
            scrub: 1, // GSAP ScrollTrigger의 이벤트가 스크롤이 사용될 때만 재생되도록 만들어주는 속성
            // markers: true // 시작위치와 끝위치를 확인가능하게 하는 마커
        }
    })

    .to('.wrap', {backgroundColor: '#ffffff', color: '#000000', ease:'none', duration: 5}, 0)
    .to('.svgani path', {stroke: '#000000', ease:'none', duration:5}, 0 )
    .to('.scroll', {opacity: '0', ease:'none', duration:5}, 0 )
    // .fromTo('.video_wrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'}, {'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10}, 0)


    // .con03 gsap animation
    // title 글자 애니메이션
    gsap.timeline({
        scrollTrigger : {
            trigger : ".con03",
            start : '0% 100%',
            end : '0% 20%',
            scrub : 1,
            // markers : true
        }
    })
    .fromTo('.con03 .title .a', {x: '-100%'}, {x: '0%', ease: 'none', duration: 5}, 0)
    .fromTo('.con03 .title .b', {x: '100%'}, {x: '0%', ease: 'none', duration: 5}, 0)

    // work_list가 나타날때 배경색 검정으로
    gsap.timeline({
        scrollTrigger: {
            trigger: '.work_list',
            start: '0% 100%',
            end: '0% 100%',
            scrub: 1
        }
    })

    .to('.wrap', {backgroundColor: "#000000", color: "#ffffff", ease: "none", duration: 5}, 0)

    // title 글자 position: fixed 적용
    .to('.con03 .title', {position: 'fixed', ease: 'none', left:'0', top: '0', width: '100%', duration: 5}, 0)

    // work_list에 margin-top을 적용해서 애니를 자연스럽게 적용
    .fromTo('.work_list', {margin: '0 auto'}, {margin: '100vh auto 0', position: 'relative', zIndex: '10', duration: 1}, 0)


    // .work_list가 끝날때, .title 글자가 화면 밖으로 사리지고록 애니 적용
    gsap.timeline({
        scrollTrigger: {
            trigger: '.work_list',
            start: '100% 50%',
            end: '100% 0%',
            scrub: 1
        }
    })
    .to('.con03 .title .a', {x: '-100%'}, {x: '0%', ease: 'none', duration: 5}, 0)
    .to('.con03 .title .b', {x: '100%'}, {x: '0%', ease: 'none', duration: 5}, 0)
});

// simplyScroll
$(function(){
    $(".con02 .list").simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
    });
});

// menuOpen
$(function(){
    $('.menuOpen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on'); // 스크롤을 방지하기 위해 작성
    })
})