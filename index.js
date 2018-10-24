const cron = require('cron').CronJob;

/**
 * BaseCron class for cron jobs.
 *
 * @class BaseCron
 */
module.exports = class BaseCron {

    /**
     * Creates an instance of BaseCron.
     *
     * @param {string} cronName
     * @param {string} cronTime
     * @public
     * @memberof BaseCron
     */
    constructor(cronName, cronTime) {
        if (!cronName) {
            throw new Error('ERR_INVALID_ARG_VALUE');
        }

        this._cronName = cronName;
        this._cronTime = cronTime;
        this._cronJob = new cron(this._cronTime, this.onTick.bind(this), this.onComplete.bind(this));
    }

    /**
     * Starts the cron job.
     *
     * @public
     * @memberof BaseCron
     */
    start() {
        this._cronJob.start();
    }

    /**
     * Stops the cron job.
     *
     * @public
     * @memberof BaseCron
     */
    stop() {
        this._cronJob.stop();
    }

    /**
     * Function onTick for the current cron job.
     *
     * @public
     * @memberof BaseCron
     */
    onTick() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    /**
     * Function onComplete for the current cron job.
     *
     * @public
     * @memberof BaseCron
     */
    onComplete() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    /**
     * Returns an instance of cron npm module.
     *
     * @public
     * @memberof BaseCron
     */
    getCronInstance() {
        return this._cronJob;
    }

    /**
     * Check if current cron job is running.
     *
     * @public
     * @memberof BaseCron
     */
    isCronRunning() {
        return this._cronJob.running;
    }

};