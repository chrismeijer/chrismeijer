import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './styles/styles.css';

import _ from 'lodash';
import './scroll';
import './modal';

$(document).ready(function() {
<<<<<<< HEAD
    console.log('env:', process.env.EMAIL_ADDRESS);

    $('.open__external').click(function(e) {
=======
    $('.link__external').click(function(e) {
>>>>>>> 4f2d734b2c827fdf7e2045581ebed236fc286531
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('.link__social-email').click(function() {
        window.location.href = 'mailto:' + process.env.EMAIL_ADDRESS;
        return false;
    });
});