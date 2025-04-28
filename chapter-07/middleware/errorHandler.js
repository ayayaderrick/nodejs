const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, "errLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message); // Send the error message to the client
};

module.exports = errorHandler;
// This middleware function handles errors that occur in the application. It logs the error details to a file and sends a response to the client with the error message. The `next` parameter is not used in this case, but it's included to maintain the standard middleware signature.
// The `logEvents` function is assumed to be defined in the `logEvents.js` file, which handles logging events to a file. The error handler is typically used as the last middleware in the stack to catch any unhandled errors that occur during request processing.
