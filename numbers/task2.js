'use strict';

function getNUmber() {
    let number = prompt("number?");
    while (true){
        switch (number) {
            case null:
                return;
            case isFinite(+number):
                return number;
        }
    }
}
