/*
 * FPGAwars (c) 2016-2017
 * License: GPL-2.0
 * Credits: Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 */

'use strict';

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Language management

var lang = '';
var languages = ['en', 'es'];
var preferredLanguages = navigator.languages || [navigator.language];
var detectedLang = 'es';// Default if none of the user’s languages is available.
preferredLanguages.some(function (lang) {
    lang = lang.split('-')[0];
    if (languages.indexOf(lang) !== -1) {
        detectedLang = lang;
        return true;
    } else {
        return false;
    }
});

// Set detected language
loadLanguage(detectedLang);

$('#lang-en').click(function(/*event*/) {
  loadLanguage('en', true);
});

$('#lang-es').click(function(/*event*/) {
  loadLanguage('es', true);
});

function loadLanguage(newLang, moveTop) {
  if (lang !== newLang) {
    // Language changed
    for (var i in languages) {
      if (languages[i] === newLang) {
        $('.' + languages[i]).removeClass('hidden');
      }
      else {
        $('.' + languages[i]).addClass('hidden');
      }
      lang = newLang;
    }
    if (moveTop) {
      // Move to top
      $('html, body').stop().animate({
        scrollTop: 0
      }, 1000, 'easeInOutExpo');
    }
  }
}
