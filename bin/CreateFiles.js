const fs = require('fs');
const path = require('path');
const { excuCommand } = require("./Command")

const createFolder = (newFolder) => {
    fs.mkdirSync(newFolder, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${newFolder} created successfully.`);
        }
    });
}

const createFile = (newFile, fileContent) => {
    fs.writeFileSync(newFile, fileContent, (err) => {
        if (err) {
            console.error(`Error Creating ${newFile} : `, err);
        } else {
            console.log(`${newFile} created successfully`);
        }
    })
}

const changeFolderAndRun = (folderName, command) => {
    const folderPath = path.join(__dirname, folderName);

    fs.access(folderPath, (err) => {
        if (err) {
            console.error(`Error accessing folder: ${folderPath}`);
            console.error(err);
            return;
        }
        process.chdir(folderPath);
        console.log(`Changed directory to: ${folderPath}`);

        excuCommand(command)
    });
}

module.exports = {
    createFile,
    createFolder,
    changeFolderAndRun
};