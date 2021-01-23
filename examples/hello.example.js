/**
 * Basic example for testing cron-es6 functions.
 */
const BaseCron = require('../index');

async function fooAsync () {
  console.log('hello from async func');
}

let counter = 0;
class Hello extends BaseCron {
  constructor () {
    super('Hello', '* * * * * *');
  }

  async onTick () {
    console.log('Next tick:');

    try {
      await fooAsync();
    } catch (err) {
      console.log(err);
    }

    counter++;
    if (counter === 3) {
      this.stop();
    }
  }

  async onComplete () {
    console.log(`------------\nComplete successful: ${counter}`);
    console.log(`is cron running: ${hello.isCronRunning()}`);
  }
}

const hello = new Hello();
console.log('starting cron');
hello.start();
console.log(`is cron running: ${hello.isCronRunning()}\n------------`);
