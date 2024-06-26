'use strict';

let browser = prompt('Give your browser');

if(browser == "Edge"){
    alert( "You've got the Edge!" );
} else if(browser == "Chrome" || browser == "Firefox" || browser == "Opera" || browser == "Safari") {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
