# cron-es6

[![NPM](https://nodei.co/npm/cron-es6.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cron-es6/)

Is just an ES6 (ECMAScript 2015) node cron wrapper around *[cron](https://www.npmjs.com/package/cron)* npm package.

# Install

To install this package just run:

```npm install cron-es6```

# Basic usage example

Here is an example of creating your cron job with cron-es6 package:

*hello.cron.js* file
```
const BaseCron = require('cron-es6');

module.exports = class Hello extends BaseCron {

    constructor() {
        super('Hello', '* * * * * *');
    }

    //override
    async onTick() {
        console.log('Hello from cron job.');
    }

    //override
    async onComplete() {
        console.log('Finished.');
    }

};

```

In some other .js file:

```
const Hello = require('./hello.cron');

let hello = new Hello();
hello.start();
```

# Available functions

- start - starts the cron job
- stop - stops the cron job
- *async* onTick - function which will be triggered on each tick
- *async* onComplete - function which will be triggered when the job is stopped
- isCronRunning - checks if the cron job is running
- getCronInstance - will return you an instance of *CronJob* from wrapped *[cron](https://www.npmjs.com/package/cron)* npm package

# Cron Ranges

- Seconds: 0-59
- Minutes: 0-59
- Hours: 0-23
- Day of Month: 1-31
- Months: 0-11 (Jan-Dec)
- Day of Week: 0-6 (Sun-Sat)

# [Contribution](CONTRIBUTING)

Feel free to contribute by forking this repository, making changes, and submitting pull requests. For any questions or advice place an issue on this repository.

# License

  [MIT](LICENSE)
