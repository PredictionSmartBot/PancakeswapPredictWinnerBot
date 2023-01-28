const { spawn } = require("child_process");
const otherApp = spawn("node", ["package.js"]);

otherApp.stdout.on("data", (data) => {
  console.log(`${data}`);
});

otherApp.stderr.on("data", (data) => {
  console.error(`${data}`);
});

otherApp.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
