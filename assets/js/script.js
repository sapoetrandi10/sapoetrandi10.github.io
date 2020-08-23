$(document).ready(function () {

    // $('.navbar').click(function () {
    //     $('.navbar').addClass('bg-info');
    // });
    // $(window).resize(function () {
    if ($(window).width() <= 576) {
        $('.navbar').addClass('bg-info');
    } else if ($(window).width() <= 768) {
        $('.navbar').addClass('bg-info');
    } else if ($(window).width() > 768) {
        $('.navbar').removeClass('bg-info');
    }
    // });

    // $(document).load(function () {
    // $('.jumbotron .container .display-3').fadeIn(2000);

    // });

    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes



    $('.page-scroll').on('click', function (e) {
        let href = $(this).attr('href');
        let elemenTujuan = $(href);
        // console.log(elemenTujuan.offset().top);

        $('html').animate({
            scrollTop: elemenTujuan.offset().top
        }, 1000);
        e.preventDefault();
    });

    // $('.page-scroll').on('click', function (e) {
    //     let href = $(this).attr('href');
    //     let elemenTujuan = $(href);
    //     // console.log(elemenTujuan.offset().top);
    //     $('img').filter('.rounded-circle').fadeIn('slow');
    //     // .css({
    //     //     "display": "none"
    //     // });

    //     e.preventDefault();
    // });
});