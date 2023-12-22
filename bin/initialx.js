#! /usr/bin/env node 
const fs = require('fs');
const { operations } = require("./AllFiles")

const runProject = () => {
    const currDir = "./"
    fs.readdir(currDir, (err, files) => {
        if (err) {
            console.error("Error reading directory: ", err)
        }
        operations();
    })
}