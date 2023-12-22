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

const DirIsEmpty = () => {
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
    editPackageJson('./');


}

const DirIsNotEmpty = (projectName) => {
    createFolder(`./${projectName}`);
    changeFolderAndRun(`./${projectName}`, "npm init");
    changeFolderAndRun(
        `./${projectName}`,
        "npm install --save-dev @babel/cli @babel/core @babel/preset-env dotenv nodemon"
    );
    changeFolderAndRun(
        `./${projectName}`,
        "npm install express mongoose mongodb"
    );
    createFile(`./${projectName}/.babelrc`, babelFileContent);
    createFile(`./${projectName}/.env`, dotenvFileContent);
    createFile(`./${projectName}/server.js`, serverFileContent);
    createFile(`./${projectName}/db.js`, dbFileContent);
    createFolder(`./${projectName}/Routes`);
    createFile(`./${projectName}/Routes/AppRouter.js`, appRouterContent);
    createFolder(`./${projectName}/Models`);
    createFile(`./${projectName}/Models/AppModel.js`, appModelContent);
    createFolder(`./${projectName}/Controllers`);
    createFile(`./${projectName}/Controllers/AppController.js`, appControllerContent);
    editPackageJson(`./${projectName}`);
    

}


module.exports = {
    DirIsEmpty,
    DirIsNotEmpty
}