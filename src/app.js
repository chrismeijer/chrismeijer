import './styles/styles.css';

import _ from 'lodash';
import './scroll.js';

var x=0;
$(document).ready(function() {
    $(document).scroll(function() {
        $('.scroll').text($(window).scrollTop());
    });
});