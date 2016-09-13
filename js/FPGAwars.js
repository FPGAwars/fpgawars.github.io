// FPGAwars Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    // Language settings
    var lang = navigator.language.substr (0, 2);
    var langs = ['en', 'es'];

    $("#lang-en").click(function(event) {
        if (lang != 'en') {
            lang = 'en';
            setLanguage(lang);
            $('html, body').stop().animate({
              scrollTop: 0
            }, 1000, 'easeInOutExpo');
        }
    });

    $("#lang-es").click(function(event) {
        if (lang != 'es') {
            lang = 'es';
            setLanguage(lang);
            $('html, body').stop().animate({
              scrollTop: 0
            }, 1000, 'easeInOutExpo');
        }
    });

    function setLanguage(lang) {

        var translate = function(jsdata) {
          $("[tkey]").each(function (index) {
              var strTr = jsdata [$(this).attr('tkey')];
              $(this).html(strTr);
          });
        };

        if (langs.indexOf(lang) != -1)
            $.getJSON('locale/'+lang+'.json', translate);
        else
            $.getJSON('locale/en.json', translate);
    };

    // Set default language
    setLanguage(lang);

})(jQuery); // End of use strict
