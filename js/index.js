$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".menu-main").addClass("menu-main-onscroll");
    } else {
        $(".menu-main").removeClass("menu-main-onscroll");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".check-box").addClass("ham-menu-main-onscroll");
    } else {
        $(".check-box").removeClass("ham-menu-main-onscroll");
    }
});