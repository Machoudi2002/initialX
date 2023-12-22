const util = require('util');
const exec = util.promisify(require('child_process').exec);

const excuCommand = async (command) => {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.error(stderr);
};

module.exports = {
  excuCommand
};
