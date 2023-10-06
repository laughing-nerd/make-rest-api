#!/usr/bin/env node
import fs from "fs";
import axios from "axios";
import { exec } from "child_process";
import chalk from "chalk";
import path from "path";

//Create the necessary directories
let directory = process.argv[2];
if (directory === undefined)
  directory = "rest-api";
fs.mkdirSync(`${directory}/controllers`, { recursive: true });
fs.mkdirSync(`${directory}/routes`, { recursive: true });

const dependencies = ["cors", "dotenv", "express", "mongodb", "nodemon"];
const crud_files = ["create", "read", "update", "delete"];

//----------------------------- Root files -----------------------------
console.log("Sit back and relax!! We'll take care of everything...");
let DIRNAME = new URL(import.meta.url).pathname;
if(process.env.OS == "Windows_NT")
  DIRNAME = DIRNAME.substring(1, DIRNAME.length - 9);
else
  DIRNAME = DIRNAME.substring(0, DIRNAME.length - 9);


//Create .env and .gitignore files
fs.writeFile(`${directory}/.env`, "DB_URI=", ()=>{});
fs.writeFile(`${directory}/.gitignore`, "node_modules/\n.env", ()=>{});

// package.json
let package_data = fs.readFileSync(path.join(DIRNAME, 'data', 'package'), 'utf-8');
package_data = package_data.replace("<NAME>", `"${directory}"`); //Name of the REST API
for (const dependency of dependencies) { //Update dependencies
  try {
    const response = await axios.get(`https://registry.npmjs.org/${dependency}/latest`);
    package_data = package_data.replace(`<${dependency}_LATEST>`, `"^${response.data.version}"`);
  }
  catch (error) {
    console.log(error);
  }
}
fs.writeFile(`${directory}/package.json`, package_data, ()=>{});

//index.js
let index_data = fs.readFileSync(path.join(DIRNAME, 'data', 'index'), "utf-8");
fs.writeFile(`${directory}/index.js`, index_data, ()=>{});

//dbConnect.js
let db_data = fs.readFileSync(path.join(DIRNAME, 'data', 'dbConnect'), "utf-8");
fs.writeFile(`${directory}/dbConnect.js`, db_data, ()=>{});

// ----------------------------- Routes and Controllers -----------------------------
const TARGET_DELIMITER = "<><>"
for (const crud of crud_files) {
  const filedata = fs.readFileSync(path.join(DIRNAME, 'data', crud), 'utf-8');
  const contents = filedata.split(TARGET_DELIMITER);
  fs.writeFile(`${directory}/routes/${crud}.js`, contents[0], ()=>{});
  fs.writeFile(`${directory}/controllers/${crud}.js`, contents[1], ()=>{});
}

//----------------------------- Install all dependencies and setup the REST API -----------------------------
console.log("Installing dependencies...");
process.chdir(directory);
exec("npm install", (error, stdout, stderr)=>{
  if(error){
    console.log(error);
      return;
  }
    console.log(chalk.greenBright("Dependencies installed successfully!"));
});
