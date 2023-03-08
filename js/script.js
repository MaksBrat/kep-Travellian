$(document).ready(function(){
    $(".slider_header").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: true, 
        initialSlide: 0, // start slide
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: false, //move with mouse only on PC
        swipe: false, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: false, // we cannot to drag
        waitForAnimate: true,
        vertical: true,
    });
});

$(document).ready(function(){
    $(".popular__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: false, 
        initialSlide: 1, // start slide
        autoplay: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: false, //move with mouse only on PC
        swipe: false, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: false, // we cannot to drag
        waitForAnimate: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    });
});


$(document).ready(function(){
    $(".special__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: true, 
        initialSlide: 1, // start slide
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: false, //move with mouse only on PC
        swipe: false, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: false, // we cannot to drag
        waitForAnimate: true,
        centerMode: true,
        variableWidth: true,
    });
});

$(document).ready(function(){
    $(".popular__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: false, 
        initialSlide: 1, // start slide
        autoplay: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: false, //move with mouse only on PC
        swipe: false, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: false, // we cannot to drag
        waitForAnimate: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ]
    });
});

$(document).ready(function(){
    $(".trip-planners__slider").slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 0,
        speed: 1500,
        easing: 'easy', 
        infinite: false, 
        initialSlide: 0, // start slide
        autoplay: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: true, //move with mouse only on PC
        swipe: true, //move only on mouse
        touchMove: true, // we cannot to drag
        waitForAnimate: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            }
        ]
    });
});

$(document).ready(function(){
    $(".gallery__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: true, 
        initialSlide: 1, // start slide
        autoplay: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDots: false,
        draggable: true, //move with mouse only on PC
        swipe: true, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: true, // we cannot to drag
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
    });
});


$(document).ready(function(){
    $(".travelers__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'easy', 
        infinite: false, 
        initialSlide: 0, // start slide
        autoplay: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: false, //move with mouse only on PC
        swipe: false, //move only on mouse
        touchThreshold: 10, //how much u need to scroll
        touchMove: false, // we cannot to drag
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    });
});
