/***************************************************
 LogLite JS Logging Module

 author: Matt@crisp.kiwi
 ported to ES6 by Andrew Roxburgh

 example usage:
 import logLite from './libs/logLite';
 logLite.defaultLogLevel = 'warn';
 var logger = logLite.getLogger('myModuleName');
 logger.warn('this is a warning');
 logLite.setLogLevel('myModuleName', 'debug');
 logger.debug('this is a debug message');

 ****************************************************/

export default (() => {

    let logLite = {};

    //Support for IE 8&9
    let bind = Function.prototype.bind || function () {
        return this;
    };
    let indexOf = Array.prototype.indexOf || function (searchElement, fromIndex) {
        var i,
            pivot = (fromIndex) ? fromIndex : 0,
            length;
        if (!this) {
            throw new TypeError();
        }
        length = this.length;
        if (length === 0 || pivot >= length) {
            return -1;
        }
        if (pivot < 0) {
            pivot = length - Math.abs(pivot);
        }
        for (i = pivot; i < length; i++) {
            if (this[i] === searchElement) {
                return i;
            }
        }
        return -1;
    };

    var exports = {
        defaultLogLevel: 'warn'
    };

    if(__DEV__){
        exports.defaultLogLevel = 'debug';
    }

    var loggers = {};
    var logLevels = ['debug', 'info', 'warn', 'error', 'off'];

    //Check for availability of logging functions
    var console = window.console;
    if (!console){ console = {}; }

    //Stub out any missing functions
    var emptyFunc = function () {};
    var fallback = console.log || emptyFunc;
    if (!console.log){ console.log = fallback; }
    if (!console.debug){ console.debug = fallback; }
    if (!console.info){ console.info = fallback; }
    if (!console.warn){ console.warn = fallback; }
    if (!console.error){ console.error = fallback; }


    /***********************************
     ** Logger class                  **
     /***********************************/
    var Logger = function (moduleName) {
        var logLevel = getLogLevel(exports.defaultLogLevel);

        this._setLogLevel = function (level) {
            logLevel = level;

            if (logLevel <= getLogLevel('debug')) {
                this.debug = bind.call(console.debug, console, getLogHeader(moduleName, 'DEBUG'));
            } else {
                this.debug = emptyFunc;
            }
            if (logLevel <= getLogLevel('info')) {
                this.info = bind.call(console.info, console, getLogHeader(moduleName, 'INFO '));
                this.log = bind.call(console.info, console, getLogHeader(moduleName, 'INFO '));
            } else {
                this.info = emptyFunc;
                this.log = emptyFunc;
            }
            if (logLevel <= getLogLevel('warn')) {
                this.warn = bind.call(console.warn, console, getLogHeader(moduleName, 'WARN '));
            } else {
                this.warn = emptyFunc;
            }
            if (logLevel <= getLogLevel('error')) {
                this.error = bind.call(console.error, console, getLogHeader(moduleName, 'ERROR'));
            } else {
                this.error = emptyFunc;
            }

        };

        this._setLogLevel(getLogLevel(exports.defaultLogLevel));
    };


    /////////////////////////////////////
    //// Private Functions //////////////
    /////////////////////////////////////
    function getLogHeader(moduleName, logLevel) {
        return logLevel + ' [' + moduleName + '] -';
    }

    function getLogLevel(logLevel) {
        var logNumber = indexOf.call(logLevels, logLevel);
        if (logNumber === -1){ throw new Error(logLevel + ' is not a valid log level');}
        return logNumber;
    }

    function createLogger(name) {
        var logger = new Logger(name);
        loggers[name] = logger;
        return logger;
    }


    /////////////////////////////////////
    //// Public Functions  //////////////
    /////////////////////////////////////
    logLite.getLogger = function (moduleName) {
        return loggers[moduleName] || createLogger(moduleName);
    };

    logLite.setLogLevel = function (moduleName, logLevel) {
        var logNumber = getLogLevel(logLevel);
        logLite.getLogger(moduleName)._setLogLevel(logNumber);
    };

    logLite.setAllLogLevel = function (logLevel) {
        for (var logger in loggers) {
            if (loggers.hasOwnProperty(logger)) {
                logLite.setLogLevel(logger, logLevel);
            }
        }
    };

    logLite.setDefaulLogLevel = function (logLevel) {
        exports.defaultLogLevel = logLevel;
    };

    return logLite;
})()
