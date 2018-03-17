$(document).ready(function () {
    // Images Loaded Plugin
    $('body').imagesLoaded().done(function (instance) {
        $(".loading_overlay").delay(3000).fadeOut();
    })

    // Hover Dropdown
    if ($("#mainNav .dropdown").length) {
        $("#mainNav .dropdown").hover(function () {
            $(this).find(".dropdown-menu").fadeIn("fast");
        }, function () {
            $(this).find(".dropdown-menu").fadeOut("fast");
        });
    }

    // Navbar Fixed on Scroll
    if ($("#mainNav").length) {
        $(window).scroll(function (ev) {
            if ($(document).scrollTop() > 10) {
                $("#mainNav").addClass("fixed-top");
            } else {
                $("#mainNav").removeClass("fixed-top");
            }
        })
    }

    // Home Page Functions
    if ($(".home").length) {

        // Count To
        if ($(".number-counter").length) {
            $('.number-counter').countTo();

        }

        // Owl Carousels
        // Intro Carousel
        if ($("#main-intro").length > 0) {
            $("#main-intro").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 7000,
                smartSpeed: 800,
                video: true,
                lazyLoad: true,
                center: true
            });

            $("#main-intro .car-item, #main-intro .car-item img").height($(window).height());

            $("#main-intro embed").css({
                width: $(".car-item").width(),
                height: $(".car-item").height()
            })

            $(".car-item #down_btn").click(function () {
                $('html').animate(
                    { scrollTop: $("#main-intro").offset().top + $("#main-intro").height() - ($(".navbar").height() * 2) }, 500, 'linear');
            });
        }

        // Feedback Carousel
        if ($("#index-feedback").length > 0) {
            $("#index-feedback").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navElement: "span",
                navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
            });
        }

        // Partners Carousel
        if ($("#index-partners").length > 0) {
            $("#index-partners").owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 600,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    }
                }
            });
        }

        // Portfolio Filtering
        if ($(".filters").length > 0) {
            $(".filters").click(function (ev) {
                ev.preventDefault();
                $(".filters.checked").removeClass("checked");
                $(this).addClass("checked");
                $(".filtering .filter_item").not("." + $(this).data("filter")).fadeOut();
                $(".filtering").find("." + $(this).data("filter")).fadeIn();
            });
        }

    }

    // About Page Functions
    if ($(".about").length) {

        // Active Link in Footer
        $("footer").find(".nav-item.active").removeClass("active");
        $("footer").find(".nav-link[href='about.html']").parent().addClass("active");

        // Info Hoverdir
        if ($(".icon-box").length) {
            $(".icon-box").hoverdir({ hoverElem: '.overlay' });
        };

        // Count To
        if ($(".number-counter").length) {
            $('.number-counter').countTo();
        }

        // Our Team Hoverdir
        if ($(".member").length) {
            $(".member").hoverdir({ hoverElem: '.overlay' });
        };
    }

    // Services Page Functions
    if ($(".service").length) {

        // Active Link in Footer
        $("footer").find(".nav-item.active").removeClass("active");
        $("footer").find(".nav-link[href='services.html']").parent().addClass("active");

        // Owl Carousel
        if ($("#service-car").length) {
            $("#service-car").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navElement: "span",
                navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
                autoplay: true,
                autoplayTimeout: 7000,
                smartSpeed: 800,
            });
        }

        // Pricing Hoverdir
        if ($(".price-card").length) {
            $(".price-card").hoverdir({ hoverElem: '.overlay' });
        };
    }



    // Blog Page Functions
    if ($(".blog").length) {

        // Active Link in Footer
        $("footer").find(".nav-item.active").removeClass("active");
        $("footer").find(".nav-link[href='blog.html']").parent().addClass("active");
    }

    // Contact Page Functions
    if ($(".contact").length) {

        // Active Link in Footer
        $("footer").find(".nav-item.active").removeClass("active");
        $("footer").find(".nav-link[href='contact.html']").parent().addClass("active");
    }






});