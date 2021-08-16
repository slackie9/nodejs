const validator = require("validator");
const chalk = require("chalk");
// console.log(validator.isEmail("slackie@gmail.com"));
// console.log(validator.isMobilePhone("0822345678", "id-ID"));
// console.log(validator.isNumeric("0822345678a"));

// console.log(chalk.italic.bgBlue.black("Hello World"));
const pesan = chalk`Lorem ipsum dolor {bgRed.black sit amet} consectetur {bgGreen.black adipisicing elit}. {bgBlue.black Iure, obcaecati}.`;
// console.log(chalk.bgRed.black(pesan));
console.log(pesan);
