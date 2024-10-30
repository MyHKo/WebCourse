'use strict'

class Clock2{
    constructor({ template }){
        this.timer = null
        this.template = template
    }

    render(template){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('hh', hours)
            .replace('mm', mins)
            .replace('ss', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start (){
        this.render(this.template);
        this.timer = setInterval(this.render, 1000, this.template);
    }

}

let clock = new Clock2({template: 'seconds : ss'});
clock.start();
