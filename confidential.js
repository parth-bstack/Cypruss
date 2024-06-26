const fs = require('fs').promises;
const dotenv = require('dotenv');
const { exec } = require('child_process');
dotenv.config();
const jsonFilePath = './browserstack.json';
const backupFilePath = './backup.json';

async function run() {
    try {
        console.log(process.env.BROWSERSTACK_USERNAME)
        let jsonData = await fs.readFile(jsonFilePath, 'utf8');
        await fs.writeFile(backupFilePath, jsonData);
        jsonData = jsonData
            .replace('${BROWSERSTACK_USERNAME}', process.env.BROWSERSTACK_USERNAME)
            .replace('${BROWSERSTACK_ACCESS_KEY}', process.env.BROWSERSTACK_ACCESS_KEY);
        await fs.writeFile(jsonFilePath, jsonData);
        exec('browserstack-cypress run', async (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
            }
            console.log(`Stdout: ${stdout}`);
            await fs.copyFile(backupFilePath, jsonFilePath);
            await fs.unlink(backupFilePath);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

run()








