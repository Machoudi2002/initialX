const { execSync } = require('child_process');

const excuCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
      console.error('Error :', error.message);
  }
}

module.exports = {
  excuCommand
};
