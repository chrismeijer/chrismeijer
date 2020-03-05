import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './styles/styles.css';

import _ from 'lodash';
import './scroll';
import './modal';

$(document).ready(function() {
    $('.menu__main-link').click(function() {
        $('.menu__main').removeClass('menu__main-active');
    });

    $('.link__external').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('.link__social-email').click(function() {
        window.location.href = 'mailto:' + process.env.EMAIL_ADDRESS;
        return false;
    });

    $('.hamburger__link').click(function() {
        $('.menu__main').toggleClass('menu__main-active');
        return false;
    });
});