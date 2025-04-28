const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//add a listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

//fire the log event
setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
