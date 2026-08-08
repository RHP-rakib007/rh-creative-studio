/*
* ----------------------------------------------------------------------------------------
Author       : RHP
Template Name: RH Creative Studio
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function($) {

    "use strict";

    $(document).ready(function() {



        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */

        $('.nav-link-click').click(function() {
            $('.navbar-collapse').collapse('hide');
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS & DOCUMENT LOAD JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).on('load', function() {

            $('.loadersss').fadeOut();
            $('#preloader-areasss').delay(350).fadeOut('slow');


            // ## Project Filtering
            


            // ## Blog Standard
            if ($('.blog-standard-wrap').length) {
                $(this).imagesLoaded(function() {
                    $('.blog-standard-wrap').isotope({
                        // options
                        itemSelector: '.item',
                    });
                });
            }
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  HEADER STYLE JS
         * ----------------------------------------------------------------------------------------
         */
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();


        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        var magnifPopup = function() {
            $('.work-popup').not('.no-popup a').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: { enabled: true },
    zoom: {
        enabled: false,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});


            $('.popup-youtube, .popup-vimeo, .popup-gmaps')
.not('.no-popup a')
.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

        };
        // Call the functions 
        magnifPopup();


        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })



        /*
         * ----------------------------------------------------------------------------------------
         *  DROPDOWN MENU JS
         * ----------------------------------------------------------------------------------------
         */
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function() {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-rh"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-rh').on('click', function() {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function(e) {
                e.preventDefault();
            });
        }

        // Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function() {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }






        // ## Testimonials Active
        if ($('.testimonials-wrap').length) {
            $('.testimonials-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                speed: 1000,
                focusOnSelect: false,
                prevArrow: '.testimonial-prev',
                nextArrow: '.testimonial-next',
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }



        // Project filter/pagination logic now lives in one place near the
        // bottom of this file (search "UNIFIED PROJECT GRID SYSTEM") so the
        // home page and works page never fight over isotope at the same time.



        /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function() {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }



        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // ## Nice Select
        $('select').niceSelect();


        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });


    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function() {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function() {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    prevArrow: '<button class="slider-arrow prev-arrow">‹</button>',
    nextArrow: '<button class="slider-arrow next-arrow">›</button>',
    
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});





    /* ==========================================================================
           SCROLLER ANIMATION
           ========================================================================== */

    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }












    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function() {

        const svg = document.getElementById("preloaderSvg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });



    });
    
 
})(window.jQuery);

/*============================================
Right Click Disable
============================================== */

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

/*============================================
Drag and Drop Disable
==============================================*/

document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

/*============================================
keyboard shortcut disable
==============================================*/
document.addEventListener("keydown", function(e) {

    if (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "c")) {
        e.preventDefault();
    }
    if (e.key === "F12") {
        e.preventDefault();
    }

}); 

/*============================================
Load more
==============================================*/
/* ============================================
UNIFIED PROJECT GRID SYSTEM (filter + pagination)
Runs on both index.html (home) and works.html.

NOTE: this intentionally does NOT use isotope for positioning anymore.
isotope calculates pixel positions in JS, and that math falls out of
sync the moment a Bootstrap breakpoint changes a column's width (e.g.
tablet/mobile), which is what was causing the overlapping/gappy cards.
Plain show()/hide() + the theme's own Bootstrap flex-wrap grid lets the
browser handle reflow natively, so it's correct at every screen size
with zero extra JS.
============================================ */

$(function () {

    var $grid = $('.project-masonry-active');
    if (!$grid.length) return;

    var $items = $grid.find('.item');
    var $loadBtn = $('#loadMoreBtn');
    var PAGE_SIZE = 6;
    var perFilterVisible = {}; // works.html only: how many items currently shown, per filter

    var isHomePage =
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname === "";

    function getActiveSelector() {
        var $current = $(".project-filter li.current");
        if ($current.length) return $current.attr("data-filter");
        return $(".project-filter li").first().attr("data-filter");
    }

    function setLoadBtnState(visible, total) {
        if (!$loadBtn.length) return;
        if (!isHomePage && total > 0 && visible >= total) {
            $loadBtn.addClass("is-disabled").prop("disabled", true);
        } else {
            $loadBtn.removeClass("is-disabled").prop("disabled", false);
        }
    }

    // Applies a filter. On the home page it always caps at PAGE_SIZE items.
    // On works.html it remembers how many items of THIS filter are already
    // "unlocked" (perFilterVisible), unless resetPage forces it back to 6
    // (a fresh tab click always restarts at 6).
    function applyFilter(selector, resetPage) {
        var visible = PAGE_SIZE;

        if (!isHomePage) {
            if (resetPage || !perFilterVisible[selector]) {
                perFilterVisible[selector] = PAGE_SIZE;
            }
            visible = perFilterVisible[selector];
        }

        var count = 0;
        var total = 0;

        $items.each(function () {
            var $it = $(this);
            if ($it.is(selector)) {
                total++;
                count++;
                var show = isHomePage ? count <= PAGE_SIZE : count <= visible;
                $it.css('display', show ? '' : 'none');
            } else {
                $it.css('display', 'none');
            }
        });

        if (!isHomePage) setLoadBtnState(visible, total);
    }

    // ---- Tab clicks ----
    $(".project-filter li").on("click", function () {
        $(".project-filter li").removeClass("current");
        $(this).addClass("current");
        applyFilter($(this).attr("data-filter"), true);
    });

    // ---- "View All Projects" button ----
    if ($loadBtn.length) {
        $loadBtn.on("click", function () {
            if ($loadBtn.hasClass("is-disabled")) return;

            var selector = getActiveSelector();

            if (isHomePage) {
                // send the visitor to works.html, already on the tab they were viewing
                window.location.href = "works.html?filter=" + selector.replace(".", "");
            } else {
                perFilterVisible[selector] = (perFilterVisible[selector] || PAGE_SIZE) + PAGE_SIZE;
                applyFilter(selector, false);
            }
        });
    }

    // ---- Initial load ----
    // Runs immediately (DOM ready), NOT on window.load — window.load waits
    // for every video on the page to finish downloading first, which made
    // the very first filter application unreliable/delayed on slower loads.
    var initialSelector;

    if (!isHomePage) {
        var params = new URLSearchParams(window.location.search);
        var filterParam = params.get("filter");

        if (filterParam) {
            initialSelector = "." + filterParam;
            $(".project-filter li").removeClass("current");
            $(".project-filter li[data-filter='" + initialSelector + "']").addClass("current");
        }
    }

    if (!initialSelector) initialSelector = getActiveSelector();

    applyFilter(initialSelector, true);

});

/* ============================================
CLEAN YOUTUBE THUMBNAIL EMBED
Markup pattern (works for both horizontal AND vertical/shorts boxes —
just change the outer class and use a portrait thumbnail image):

Horizontal / long-form:
<div class="project-image video-horizontal yt-embed" data-yt-id="VIDEO_ID">
    <img class="yt-thumb" src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg" alt="thumbnail">
    <button class="yt-play-btn" aria-label="Play video"><i class="ri-play-fill"></i></button>
</div>

Vertical / shorts (same idea, just swap video-horizontal → video-vertical):
<div class="project-image video-vertical yt-embed" data-yt-id="SHORT_VIDEO_ID">
    <img class="yt-thumb" src="https://img.youtube.com/vi/SHORT_VIDEO_ID/hqdefault.jpg" alt="thumbnail">
    <button class="yt-play-btn" aria-label="Play video"><i class="ri-play-fill"></i></button>
</div>

To use YOUR OWN custom thumbnail instead of YouTube's auto thumbnail,
just point the <img src="..."> at your own image file, e.g.
src="assets/images/projects/my-custom-thumb.jpg" — everything else works
the same.

No YouTube title/share icons/logo show until the visitor clicks — only our
own thumbnail + our own play button. Clicking swaps in the real YouTube
player (autoplaying), matching the same rounded box exactly.
============================================ */

function resetOtherYtEmbeds(exceptEl) {
    $('.yt-embed, .local-embed').each(function () {
        if (this === exceptEl) return;
        var $wrap = $(this);
        var original = $wrap.data('original-html');
        var isPlaying = $wrap.find('iframe').length || $wrap.find('video').length;
        if (isPlaying && original) {
            $wrap.html(original);
        }
    });
}

$(document).on('click', '.yt-embed .yt-play-btn', function () {
    var $wrap = $(this).closest('.yt-embed');
    var videoId = $wrap.data('yt-id');
    if (!videoId) return;

    // Only one video plays at a time: stop local <video> tags and reset
    // every other YouTube thumbnail back to its "not playing" state.
    $('video').each(function () { this.pause(); });
    resetOtherYtEmbeds($wrap[0]);
    stopShowreel();

    if (!$wrap.data('original-html')) {
        $wrap.data('original-html', $wrap.html());
    }

    var $iframe = $('<iframe>', {
        src: 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1',
        frameborder: 0,
        allow: 'autoplay; fullscreen; picture-in-picture',
        allowfullscreen: true
    });

    $wrap.empty().append($iframe);
});

/* ============================================
CLEAN LOCAL-VIDEO THUMBNAIL EMBED
Same idea as .yt-embed above, but for your own video files instead of
YouTube — gives a custom thumbnail + your own play button for local
videos too (no browser default play button showing before click).

Markup pattern:

<div class="project-image video-horizontal local-embed" data-video-src="assets/horizontal-project-video/myad.mp4">
    <img class="yt-thumb" src="assets/images/projects/myad-thumb.jpg" alt="thumbnail">
    <button class="yt-play-btn" aria-label="Play video"><i class="ri-play-fill"></i></button>
</div>

(For vertical/shorts, swap video-horizontal → video-vertical — same as before.)
No thumbnail yet? Just remove the <img> line entirely; the video's own
first frame will show once played, and the play button still works fine.
============================================ */
$(document).on('click', '.local-embed .yt-play-btn', function () {
    var $wrap = $(this).closest('.local-embed');
    var videoSrc = $wrap.data('video-src');
    if (!videoSrc) return;

    // Only one video plays at a time: stop everything else first.
    $('video').each(function () { this.pause(); });
    resetOtherYtEmbeds($wrap[0]);
    stopShowreel();

    if (!$wrap.data('original-html')) {
        $wrap.data('original-html', $wrap.html());
    }

    var video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.style.position = 'absolute';
    video.style.inset = '0';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.display = 'block';
    video.style.zIndex = '5';
    video.style.borderRadius = 'inherit';

    var source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

    $wrap.empty()[0].appendChild(video);

    var playPromise = video.play();
    if (playPromise && playPromise.catch) {
        playPromise.catch(function () {
            // Autoplay blocked — the visible native controls still let
            // the visitor press play themselves.
        });
    }
});

/* ============================================
ONLY ONE VIDEO PLAYS AT A TIME
Starting playback on any local <video> tag pauses every other local
video AND resets any currently-playing YouTube thumbnail embeds.
NOTE: the native 'play' event does NOT bubble, so jQuery's delegated
$(document).on('play', 'video', ...) is unreliable — a capture-phase
native listener is the correct way to catch it for every <video> on
the page, including ones added to the DOM later.
============================================ */
document.addEventListener('play', function (e) {
    if (e.target.tagName !== 'VIDEO') return;

    document.querySelectorAll('video').forEach(function (video) {
        if (video !== e.target) video.pause();
    });
    resetOtherYtEmbeds(null);
    stopShowreel();
}, true);



/*============================================
Showreel
==============================================*/
function stopShowreel() {
    var $thumb = $('#showreelThumb');
    var $wrapper = $('#showreelVideoWrapper');
    var $iframe = $('#showreelIframe');

    if ($wrapper.length && $wrapper.css('display') !== 'none') {
        $iframe.attr('src', ''); // actually stops playback, not just hides it
        $wrapper.hide();
        $thumb.show();
    }
}

const playBtn = document.querySelector("#playShowreel");

if(playBtn){

    playBtn.addEventListener("click", function(){

        // Only one video plays at a time: stop every other video/short first
        $('video').each(function () { this.pause(); });
        resetOtherYtEmbeds(null);

        document.querySelector("#showreelThumb").style.display = "none";

        const iframe = document.querySelector("#showreelIframe");

        document.querySelector("#showreelVideoWrapper").style.display = "block";

        iframe.src =
        "https://www.youtube.com/embed/6kYRUsXtS4s?autoplay=1";

    });

}

/*============================================
loader
==============================================*/
if (sessionStorage.getItem("visited")) {
    $(".preloader").hide();
} else {
    sessionStorage.setItem("visited", "true");
}

/* ============================================
FAQ ACCORDION (services page)
============================================ */
$(document).on('click', '.faq-question', function () {
    var $item = $(this).closest('.faq-item');
    var wasActive = $item.hasClass('active');

    $item.siblings('.faq-item').removeClass('active');
    $item.toggleClass('active', !wasActive);
});


/* ============================================
CONTACT FORM (Web3Forms) — AJAX submit so the
visitor sees a success message instead of being
redirected to a raw JSON response page
============================================ */
$(function () {
    var $form = $('#contactForm');
    if (!$form.length) return;

    $form.on('submit', function (e) {
        e.preventDefault();

        var $btn = $form.find('button[type="submit"]');
        var $msg = $('#msgSubmit');
        var originalBtnText = $btn.html();

        $btn.prop('disabled', true).text('Sending...');

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json'
        }).done(function (res) {
            if (res.success) {

    $btn
        .addClass('contact-success-btn')
        .html('Message sent! <i class="ri-check-line"></i>');

    $msg
        .removeClass('hidden')
        .removeClass('text-danger h4 text-left tada animated text-success')
        .addClass('contact-success-message')
        .html('<span class="contact-success-subtext">I will get back to you soon.</span>');

    setTimeout(function () {
        $msg.find('.contact-success-subtext').addClass('show');
    }, 100);

    setTimeout(function () {
        $msg.find('.contact-success-subtext')
            .removeClass('show')
            .addClass('hide');
    }, 3500);

    setTimeout(function () {

        $msg
            .removeClass('contact-success-message')
            .addClass('hidden')
            .empty();

        $btn
            .removeClass('contact-success-btn')
            .prop('disabled', false)
            .html(originalBtnText);

    }, 4300);

    $form[0].reset();
}

else {
                $msg.removeClass('hidden').addClass('h4 text-left text-danger')
                    .text('Something went wrong. Please try again.');
            }
        }).fail(function () {
            $msg.removeClass('hidden').addClass('h4 text-left text-danger')
                .text('Something went wrong. Please try again.');
        }).always(function () {
    $btn.prop('disabled', false);
});
    });
});



/* ============================================
ACTIVE NAV LINK
Highlights whichever page the visitor is currently on in the main menu.
============================================ */
$(function () {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    $('.navigation .nav-link-click').each(function () {
        var linkPage = $(this).attr('href');
        if (linkPage === currentPage) {
            $(this).closest('li').addClass('current-page');
        }
    });
});


/* ============================================
CUSTOM PLAY BUTTON OVERLAY
The <video> tag underneath is a normal native video with controls —
this just adds a custom play icon on top that hides once playing and
reappears when paused/ended. No DOM swapping, so it can't break.
============================================ */
$(document).on('click', '.custom-play .custom-play-btn', function (e) {
    e.stopPropagation();

    var video = $(this).siblings('video')[0];

    if (video) {
        video.controls = true;
        video.play();
    }
});

document.addEventListener('play', function (e) {
    if (e.target.tagName !== 'VIDEO') return;
    var wrap = e.target.closest('.custom-play');
    if (wrap) wrap.classList.add('is-playing');
}, true);

document.addEventListener('pause', function (e) {
    if (e.target.tagName !== 'VIDEO') return;
    var wrap = e.target.closest('.custom-play');
    if (wrap) wrap.classList.remove('is-playing');
}, true);

document.addEventListener('ended', function (e) {
    if (e.target.tagName !== 'VIDEO') return;
    var wrap = e.target.closest('.custom-play');
    if (wrap) wrap.classList.remove('is-playing');
}, true);
