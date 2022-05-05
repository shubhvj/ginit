import fs from "fs"
import path from "path"

function getCurrentDirectoryBase(){
  return path.basename(process.cwd());
};

function directoryExists(filePath){
  try {
    return fs.existsSync(filePath).isDirectory();
  } catch (error) {
    return false;
  }
};


export {getCurrentDirectoryBase, directoryExists}