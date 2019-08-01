/*
const add = require('./utils.js');
console.log(add(6, 4));
*/

/*
const validator = require('validator');
const getNotes = require('./notes.js');

console.log(getNotes());

console.log(validator.isEmail('cei37.d@4hotmail.wq'));

console.log(validator.isURL('eah.io'));
*/

const chalk = require('chalk');
const log = console.log;

log(chalk.green('Hello world!'));
log(process.argv);

/*
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
 
 
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));


log(chalk.hex('#DEADED').underline('Hello, world!'))
log(chalk.keyword('orange')('Some orange text'))
log(chalk.rgb(15, 100, 204).inverse('Hello!'))

console.log("Yeah");
*/