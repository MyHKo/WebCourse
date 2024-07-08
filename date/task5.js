'use strict';

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 1);
    let newMonth;
    for(let i = 28; i <= 31; i++){
         newMonth = new Date(date.setDate(date.getDate() + i)).getMonth();
         date =  new Date(year, month, 1);
        if(newMonth !== month)
            return i;
    }
}

console.log(getLastDayOfMonth(2012, 1));