// Phillip Onofua | Student ID: 101489064 | COMP3123 Lab Test 1
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);

    files.forEach(file => {
        const filePath = path.join(logsDirectory, file);

        fs.unlinkSync(filePath);
        console.log(`delete files...${file}`);
    });

    fs.rmdirSync(logsDirectory);
}
