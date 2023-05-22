$(".slider_header").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    infinite: true, 
    initialSlide: 0, 
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDots: true,
    draggable: false, 
    swipe: false,
    touchThreshold: 10,
    touchMove: false,
    waitForAnimate: true,
    vertical: true,
});


$(".popular__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    speed: 1500,
    infinite: false, 
    initialSlide: 1, // start slide
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDots: true,
    draggable: false,
    swipe: false, 
    touchThreshold: 10,
    touchMove: false,
    waitForAnimate: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            }
        },
    ]
});

$(".special__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    infinite: true, 
    initialSlide: 1,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDots: true,
    draggable: false,
    swipe: false,
    touchThreshold: 10, 
    touchMove: false,
    waitForAnimate: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            }
        },
    ]
});

$(".gallery__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1500,
    infinite: true, 
    initialSlide: 1,
    autoplay: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDots: false,
    draggable: false,
    swipe: false, 
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
            rows: 4,
            slidesToShow: 1,
            variableWidth: false,
            }
        }
    ]
});

$(".travelers__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    infinite: true, 
    initialSlide: 0,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDots: true,
    draggable: false, 
    swipe: false,
    touchThreshold: 10, 
    touchMove: false,
    waitForAnimate: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            }
        },
    ]
});
