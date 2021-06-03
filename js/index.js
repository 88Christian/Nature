$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".menu-main").addClass("menu-main-onscroll");
    } else {
        $(".menu-main").removeClass("menu-main-onscroll");
    }
});