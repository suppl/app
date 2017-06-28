import 'jquery';
import 'lodash';


$(document).on('focus', '.suppl-input > *', function () {
    $(this).parent().addClass('focus');
});

$(document).on('blur', '.suppl-input > *', function () {
    $(this).parent().removeClass('focus');
});

var DEBUG = false;
// ENABLE/DISABLE Console Logs
if (!DEBUG) {
    console.log  = function () {
    };
    console.info = function () {
    };
}