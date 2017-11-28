// *********************************************************************
// *********************************************************************
// *********************************************************************

import grid from './components/Grid.vue';
import column from './components/Column.vue';
import box from './components/Box.vue';
import flash from './components/Alert.vue';
import navbar from './components/Navbar.vue';
import btn from './components/Button.vue';
import modal from './components/Modal.vue';
import modaltrigger from './components/ModalTrigger.vue';
import field from './components/Field.vue';
import textfield from './components/Textfield.vue';

new Vue({
    el: '#app', 
    components: {
        grid,    
        column, 
        box, 
        flash, 
        navbar, 
        btn, 
        modal,
        modaltrigger,
        field,
        textfield,
    }
});

// *********************************************************************
// *********************************************************************
// *********************************************************************

///* ========================================================================
//   #MODALS
//   ======================================================================== */

$('.modal-trigger').click(function(e) {
    e.preventDefault();
  var el = $(this)[0],
      classes = el.className.split(/\s+/);
  for(var i = 0; i < classes.length; i++) {
    if(classes[i].match(/modal-/)) {
      var modalClass = classes[i];
      $('.modal.' + modalClass).addClass('is--active');
    }
  }
});

$('.modal-close').click(function() {
    $('.modal.is--active').removeClass('is--active');

    setTimeout(() => {
      $('.modal-content').scrollTop(0);
    }, 500);
});

$('.modal-background').click(function() {
    $('.modal.is--active').removeClass('is--active');

    setTimeout(() => {
      $('.modal-content').scrollTop(0);
    }, 500);
});

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $('.modal.is--active').removeClass('is--active');

        setTimeout(() => {
      $('.modal-content').scrollTop(0);
    }, 500); 
    }
});

///* ========================================================================
//   #FORM
//   ======================================================================== */

var careersForm = $('#contact-form');
var formMessages = $('.form-messages');

$(careersForm).submit(function (event) {
    event.preventDefault();
    //grab all form data  
    var formData = new FormData($(this)[0]);

    $.ajax({
        url: $(careersForm).attr('action'),
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            $(formMessages).html('<div class="alert success">Thanks for your interest in Rochester Place Resort &amp; Golf.  We\'ll be in touch soon!</div>');

            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
        },
        error: function () {
            $(formMessages).html('<div class="alert error">Oh no!  Something went wrong, give it a try agian.</div>');

            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
        }
    });

    return false;
});

///* ========================================================================
//   #FADE
//   ======================================================================== */

window.onbeforeunload = function () {
  $('body').addClass('is--leaving');
  $('.loader').addClass('is--leaving');
};

$(window).on('load', function () {
  $('body').addClass('is--entered');
  $('.loader').addClass('is--entered');
});

///* ========================================================================
//   #MENU
//   ======================================================================== */

var menuTrigger = $('.menu-trigger');
var menuClose = $('.menu__close');
var menu = $('.menu');

menuTrigger.click(() => {
  menu.toggleClass('is--open');
});

menuClose.click(() => {
  menu.toggleClass('is--open');
});

$(document).keydown(function (e) {
    if (e.keyCode == 27 && menu.hasClass('is--open')) {
        menu.removeClass('is--open'); 
    }
});

///* ========================================================================
//   #COURSE ACCORDION
//   ======================================================================== */

var courseTitle = $('.course-title');
var courseDescription = $('.course-description');

courseDescription.hide().first().show();
courseTitle.on('click', function() {
  courseTitle.removeClass('is--open');
  $(this).addClass('is--open');
  courseDescription.slideUp();
  $(this).next(courseDescription).slideDown();
});

///* ========================================================================
//   #ACCORDION
//   ======================================================================== */
var accordionTitle = $('.accordion-title');
var accordionBody = $('.accordion-body');

accordionBody.hide().first().show();
accordionBody.first().addClass('is--open');
accordionTitle.click(function() {
  accordionBody.slideUp();
  $(this).next(accordionBody).slideDown();
  accordionTitle.removeClass('is--open');
  $(this).addClass('is--open');
});
