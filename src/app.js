import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './styles/styles.css';

import _ from 'lodash';
import './scroll';
import './modal';

$(document).ready(function() {
    console.log('env:', process.env.EMAIL_ADDRESS);

    $('.open__external').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('.link__social-email').click(function() {
        window.location.href = 'mailto:' + process.env.EMAIL_ADDRESS;
        return false;
    });
});