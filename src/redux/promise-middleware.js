import logLite from '../libs/logLite';

let logger = logLite.getLogger('promise middleware');

export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;

    logger.log(action);


    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({...rest, type: REQUEST});

    return promise().then(
      (result) => {
        next({...rest, result, type: SUCCESS});
      },
      (error) => {
        next({...rest, error, type: FAILURE});
      }
    )
  }
}
