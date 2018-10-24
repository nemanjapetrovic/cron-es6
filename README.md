# cron-es6

[![NPM](https://nodei.co/npm/cron-es6.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cron-es6/)

Is just an ES6 (ECMAScript 2015) node cron wrapper around *[cron](https://www.npmjs.com/package/cron)* npm package.

# Install

To install this package just run:

```npm install cron-es6```

# Basic usage example

Here is an example of creating your cron job with cron-es6 package:

```
const BaseCron = require('cron-es6');

class Hello extends BaseCron {

    constructor() {
        super('Hello', '* * * * * *');
    }

    //override
    onTick() {
        console.log('***Hello from cron job.');
    }

    //override
    onComplete() {
        console.log('Finished.');
    }

};

let hello = new Hello();
hello.start();
```

# Available functions

- start - starts the cron job
- stop - stops the cron job
- onTick - function which will be trigger on each tick
- onComplete - function which will be triggerd when the job is stopped
- isCronRunning - checks if the cron job is running
- getCronInstance - will return you an instance of *CronJob* from wrapped *[cron](https://www.npmjs.com/package/cron)* npm package

# [Contribution](https://github.com/nemanjapetrovic/cron-es6/blob/master/CONTRIBUTING.md)

Feel free to contribute by forking this repository, making some changes, and submitting pull requests. For any questions or advice place an issue on this repository.

# License

  [MIT](LICENSE)
