import chalk from "chalk";
import validator from 'validator';
// const chalk=require("chalk");
console.log(chalk.blue.underline.inverse("Hello world"));
// const validator=require("validator");
const result = validator.isEmail("thapa@thapa.com");
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));