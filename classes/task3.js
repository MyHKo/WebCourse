'use strict';

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class megaClock extends Clock {
    constructor({ template, precision}) {
        super({template});
        this.precision = precision;
    }

    set precision(precision) {
        if (precision === undefined) {
            this._precision = 1000;
        }
        else {
            this._precision = precision;
        }
    }

    get precision() {
        return this._precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new megaClock({template: 's', precision: 2000});
clock.start()