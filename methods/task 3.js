let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // <----- Method should return this, so we get a reference to the actual object.
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log( this.step );
    }
};

ladder.up().up().down().down();
ladder.showStep();