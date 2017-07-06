/*
 Author: Hao Xiangpeng
 */

(function ($) {

    "use strict";

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0
            && $header.hasClass('alt')) {

            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: function () {
                    $header.removeClass('alt');
                },
                enter: function () {
                    $header.addClass('alt');
                },
                leave: function () {
                    $header.removeClass('alt');
                }
            });
        }

        $('#one').scrollex({
            mode: 'top',
            initialize: function () {
                $header.css('background-color', '')
            },
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(85,158,184,0.80)');

            },
            leave: function () {
                $header.css('background-color', '');

            }
        });
        $('#two').scrollex({
            mode: 'top',
            initialize: function () {
                $header.css('background-color', '')
            },
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(201, 95, 45,0.8)');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });
        $('#three').scrollex({
            mode: 'top',
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(3, 89, 89,0.8)');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });
        $('#five').scrollex({
            mode: 'top',
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', '#4c889e');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });
        $('#six').scrollex({
            mode: 'top',
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', '#a94c42');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });

        // Menu.
        var $menu = $('#menu');

        $menu._locked = false;

        $menu._lock = function () {

            if ($menu._locked)
                return false;

            $menu._locked = true;

            window.setTimeout(function () {
                $menu._locked = false;
            }, 350);

            return true;

        };

        $menu._show = function () {

            if ($menu._lock())
                $body.addClass('is-menu-visible');

        };

        $menu._hide = function () {

            if ($menu._lock()){
                $(document.getElementById("all")).removeClass("hide");
                $(document.getElementById("life-m")).addClass("hide");
                $(document.getElementById("study-m")).addClass("hide");
                $(document.getElementById("academic-m")).addClass("hide");
                $body.removeClass('is-menu-visible');
            }

        };

        $menu._toggle = function () {

            if ($menu._lock())
                $body.toggleClass('is-menu-visible');

        };

        $menu
            .appendTo($body)
            .on('click', function (event) {

                event.stopPropagation();

                // Hide.
                $menu._hide();

            })
            .find('.inner')
            .on('click', '.close', function (event) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                // Hide.
                $menu._hide();

            })
            .on('click', function (event) {
                event.stopPropagation();
            })
            .on('click', 'a', function (event) {

                var href = $(this).attr('href');
                if(href !== undefined) {

                    event.preventDefault();
                    event.stopPropagation();

                    // Hide.
                    $menu._hide();

                    // Redirect.
                    window.setTimeout(function () {
                        window.location.href = href;
                    }, 350);

                } else {
                    const id = $(this).attr('id');
                    const menu = document.getElementById(id + '-m');
                    $(menu).toggleClass('hide');
                    $(document.getElementById("all")).addClass('hide');


                    event.preventDefault();
                    event.stopPropagation();
                }

            });

        $body
            .on('click', 'a[href="#menu"]', function (event) {

                event.stopPropagation();
                event.preventDefault();

                // Toggle.
                $menu._toggle();

            })
            .on('keydown', function (event) {

                // Hide on escape.
                if (event.keyCode == 27)
                    $menu._hide();

            });


    });

})(jQuery);

// $(document).ready(
//     $('.ds-powered-by').remove()
// );

$(document).ready(function () {
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    })
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37991730-7', 'auto');
ga('send', 'pageview');