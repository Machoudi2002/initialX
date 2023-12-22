const fs = require('fs');

const editPackageJson = (folderName) => {
        fs.readFileSync('package.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading package.json:', err);
                return;
            }

            try {
                const packageJson = JSON.parse(data);

                packageJson.main = 'server.js';
                packageJson.scripts = packageJson.scripts || {};
                packageJson.scripts.start = 'nodemon --exec babel-node src/server.js';

                const updatedPackageJson = JSON.stringify(packageJson, null, 2);

                fs.writeFileSync('package.json', updatedPackageJson, 'utf-8', (writeErr) => {
                    if (writeErr) {
                        console.error('Error writing to package.json:', writeErr);
                        return;
                    }

                    console.log('Script added to package.json successfully.');
                });
            } catch (jsonError) {
                console.error('Error parsing package.json as JSON:', jsonError);
            }
        });
}

module.exports = {
    editPackageJson
}
