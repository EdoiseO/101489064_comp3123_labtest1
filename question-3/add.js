// Phillip Onofua | Student ID: 101489064 | COMP3123 Lab Test 1
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`

    fs.writeFileSync(
         path.join(process.cwd(), fileName),
        `This is log file ${i}.\n`,
        { flag: 'wx' }
    )

    console.log(fileName);
};