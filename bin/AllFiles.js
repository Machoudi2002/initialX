const { createFile, createFolder } = require("./CreateFiles")
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
        await excuCommand("npm install --save-dev @babel/node @babel/core @babel/preset-env dotenv nodemon");
        await excuCommand("npm install express mongoose mongodb");
        createFile(`./.babelrc`, babelFileContent);
        createFile(`./.env`, dotenvFileContent);
        createFile(`./server.js`, serverFileContent);
        createFile(`./db.js`, dbFileContent);
        createFolder(`./Routes`);
        createFile(`./Routes/AppRouter.js`, appRouterContent);
        createFolder(`./Models`);
        createFile(`./Models/AppModel.js`, appModelContent);
        createFolder(`./Controllers`);
        createFile(`./Controllers/AppController.js`, appControllerContent);
        await editPackageJson('./');
        await excuCommand("npm start");
    } catch (error) {
        console.error('Error during operations:', error.message);
    }
};


module.exports = {
    operations
}