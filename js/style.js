$(document).ready(function(){
    $('.opinion-wrapp').slick({
        slidesToShow: 2,
        autoplay: false,
    });
});

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})