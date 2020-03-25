"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const isVerboseLoggingEnabled = protractor_1.browser.params.verboseLogging;
/**
 * Static logging helper class that outputs verbose information to the console.
 * Calls to this class only log to the console if the ENABLE_VERBOSE_LOGGING env variable is set to true.
 */
class VerboseLogger {
    /**
     * Send the message to console.debug with a timestamp, only is ENABLE_VERBOSE_LOGGING is true.
     * @param {string} message
     */
    static log(message) {
        if (isVerboseLoggingEnabled) {
            const timestamp = new Date().toISOString().split('T')[1];
            // tslint:disable-next-line:no-console
            console.debug(`[${timestamp} - verbose]: ${message}.`);
        }
    }
    static logSelector(timeout, targetElement, awaitedState) {
        const selector = targetElement.locator().toString();
        VerboseLogger.log(`Waiting ${timeout}ms for element with selector [${selector}] to ${awaitedState}.`);
    }
}
exports.VerboseLogger = VerboseLogger;
//# sourceMappingURL=verbose-logger.js.map