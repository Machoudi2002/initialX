const { createFile, createFolder, changeFolderAndRun } = require("./CreateFiles")
const { excuCommand } = require("./Command")
const { editPackageJson } = require("./JsonPlay")
const { 
    appControllerContent,
    appRouterContent, 
    babelFileContent,
    appModelContent,
    dotenvFileContent,
    serverFileContent,
    dbFileContent
} = require("./data")

const operations = async () => {
    try {
        await excuCommand("npm init");
        await excuCommand("npm install --save-dev @babel/cli @babel/core @babel/preset-env dotenv nodemon");
        await excuCommand("npm install express mongoose mongodb");
        await editPackageJson('./');
        await createFile(`./.babelrc`, babelFileContent);
        await createFile(`./.env`, dotenvFileContent);
        await createFile(`./server.js`, serverFileContent);
        await createFile(`./db.js`, dbFileContent);
        await createFolder(`./Routes`);
        await createFile(`./Routes/AppRouter.js`, appRouterContent);
        await createFolder(`./Models`);
        await createFile(`./Models/AppModel.js`, appModelContent);
        await createFolder(`./Controllers`);
        await createFile(`./Controllers/AppController.js`, appControllerContent);
        await excuCommand("npm start");
    } catch (error) {
        console.error(`Error during operations: ${error.message}`);
    }
};


module.exports = {
    operations
}