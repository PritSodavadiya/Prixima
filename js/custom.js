$(document).ready(function () {
    $('#banner').owlCarousel({

        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-regular fa-hand-point-left"></i>', '<i class="fa-regular fa-hand-point-right"></i>'],
        smartSpeed: 1000,
        autoplayHoverPause: true,
    })

})

    $(document).ready(function () {
        $('#projects').owlCarousel({

            items: 2,
            margin: false,
            center: true,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsiveRefreshRate: 1,
            responsive: {
                0: {
                    items: 1                    
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
         })

     })

 $(document).ready(function () {
    $('#reviews').owlCarousel({
    items: 1,
    margin: false,
    center: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    })

})
