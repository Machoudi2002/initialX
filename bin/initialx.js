#! /usr/bin/env node 
const fs = require('fs');
const readline = require('readline');
const { DirIsEmpty, DirIsNotEmpty} = require("./AllFiles")

const isEmptyDir = (projectName) => {
    const currDir = "./"
    fs.readdir(currDir, (err, files) => {
        if (err) {
            console.error("Error reading directory: ", err)
        }
        if (files.length === 0) {
            console.log("Directory is empty");
            DirIsEmpty();
        } else {
            console.log("Directory is not empty");
            DirIsNotEmpty(projectName)
        }

    })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Project Name : ', (answer) => {
    isEmptyDir(answer);
    rl.close();
  });