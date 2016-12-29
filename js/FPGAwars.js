// FPGAwars Theme JavaScript

(function($) {
    'use strict'; // Start of use strict

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
    });

    // Load content
    $.getJSON('content.json', function(categories) {
      for (var c in categories) {
          var category = categories[c];
          var selector = $('#' + category.id);
          var content = selector.find('.content');
          var bg = category.bgwhite ? 'bg-light-gray': 'bg-light-white';
          for (var i in category.items) {
              var item = category.items[i];
              var link = item.link ? item[item.link] : item.docs;
              var fontsize = item.fontsize ? ' style="font-size:' + item.fontsize + ';"' : '';
              content.append(
              '<div id="' + item.id + '" class="col-md-4 col-sm-6 portfolio-item">\
                  <a href="' + link + '" class="portfolio-link ' + bg + '" data-toggle="modal">\
                      <div class="portfolio-hover"></div>\
                      <img src="img/' + category.id + '/' + item.id + '.png" class="img-responsive" alt="">\
                  </a>\
                  <div class="portfolio-caption ' + bg + '">\
                      <div class="row">\
                          <h4 tkey="' + item.id + '"' + fontsize + '></h4>\
                          <a href="' + item.docs + '">\
                             <i class="fa fa-book fa-2x"></i>\
                          </a>\
                          <a href="' + item.repo + '">\
                             <i class="fa fa-github fa-2x"></i>\
                          </a>\
                      </div>\
                      <div class="row">\
                          <p class="text-muted" tkey="' + item.id + '_desc"></p>\
                      </div>\
                  </div>\
              </div>\
              ');
          }
      }
    });

    // Language settings
    var lang = navigator.language.substr(0, 2);
    var langs = ['en', 'es'];

    $('#lang-en').click(function(/*event*/) {
        if (lang !== 'en') {
            lang = 'en';
            setLanguage(lang);
            $('html, body').stop().animate({
              scrollTop: 0
            }, 1000, 'easeInOutExpo');
        }
    });

    $('#lang-es').click(function(/*event*/) {
        if (lang !== 'es') {
            lang = 'es';
            setLanguage(lang);
            $('html, body').stop().animate({
              scrollTop: 0
            }, 1000, 'easeInOutExpo');
        }
    });

    function setLanguage(lang) {

        var translate = function(jsdata) {
          $('[tkey]').each(function(/*index*/) {
              var strTr = jsdata [$(this).attr('tkey')];
              $(this).html(strTr);
          });
        };

        if (langs.indexOf(lang) !== -1) {
            $.getJSON('locale/'+lang+'.json', translate);
        }
        else {
            $.getJSON('locale/en.json', translate);
        }
    }

    // Set default language
    setLanguage(lang);

})(jQuery); // End of use strict
