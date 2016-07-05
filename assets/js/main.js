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

            if ($menu._lock())
                $body.removeClass('is-menu-visible');

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

                event.preventDefault();
                event.stopPropagation();

                // Hide.
                $menu._hide();

                // Redirect.
                window.setTimeout(function () {
                    window.location.href = href;
                }, 350);

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


console.log('%c我们正在寻找你！' +
    '\n%c求是潮工作团队%c(http://www.zjuqsc.com)\n' +
    '%c是浙江大学最专业的学生组织\n' +
    '如果你也执着、认真、\n' +
    '充满激情、心怀梦想\n' +
    '%c请联系:' +
    'https://joinus.zjuqsc.com \n' +
    '或者直接发邮件到 haoxiangpeng@hotmail.com',
    'font-weight:bold;color:#ed0345; font-size:300%',
    'color:#017351;font-size:150%',
    'color:#017351;font-size:100%',
    'color:#03c383;font-size:150%',
    'color:#03c383;font-size:100%');

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

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?3d79002933b635ec32f076574d8e3887";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

if($(window).width()>1024){
    $('.alert').css('display','block');
}
