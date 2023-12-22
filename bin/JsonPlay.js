const fs = require('fs').promises;

const editPackageJson = async (folderName) => {
    try {
        const data = await fs.readFile('package.json', 'utf8');

        const packageJson = JSON.parse(data);

        packageJson.main = 'server.js';
        packageJson.scripts = packageJson.scripts || {};
        packageJson.scripts.start = 'nodemon --exec babel-node server.js';

        const updatedPackageJson = JSON.stringify(packageJson, null, 2);

        await fs.writeFile('package.json', updatedPackageJson, 'utf-8');
        console.log('Script added to package.json successfully.');
    } catch (err) {
        console.error('Error manipulating package.json:', err);
    }
};


module.exports = {
    editPackageJson
}
