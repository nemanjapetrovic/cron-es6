/**
 * Basic example for testing cron-es6 functions.
 */
const BaseCron = require('../index');

let counter = 0;
class Hello extends BaseCron {

    constructor() {
        super('Hello', '* * * * * *');
    }

    onTick() {
        console.log('***Hello from cron job.');

        counter++;
        if (counter === 3) {
            this.stop();
        }
    }

    onComplete() {
        console.log(`Complete successful: ${counter}`);
        console.log(`is cron running: ${hello.isCronRunning()}`);
    }

};

let hello = new Hello();
console.log('starting cron');
hello.start();
console.log(`is cron running: ${hello.isCronRunning()}`);