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

const operations = () => {
    excuCommand("npm init")
    excuCommand("npm install --save-dev @babel/cli @babel/core @babel/preset-env dotenv nodemon");
    excuCommand("npm install express mongoose mongodb");
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
    editPackageJson('./', () => {
        excuCommand("npm start");
    });
    


}


module.exports = {
    operations
}