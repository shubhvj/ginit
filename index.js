import chalk from 'chalk'
import clear from  'clear'
import figlet from 'figlet'
import { directoryExists, getCurrentDirectoryBase } from "./lib/files.js"


clear();

console.log(chalk.yellow(figlet.textSync('Ginit', {
    horizontalLayout: 'full'
})))

if(directoryExists('.git')){
    console.log(chalk.red('Already a git repository..!'))
    process.exit()
}