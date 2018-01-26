const eight = require("johnny-five");
const board = new eight.Board();

board.on("ready", () => {
  const led = new eight.Led(8);
  led.blink(500);
});
