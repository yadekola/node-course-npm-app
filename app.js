// npm validator
// const validator = require('validator')

// console.log(validator.isEmail('test@example.com')) // true)
// console.log(validator.isEmail('example.com')) // false)
// console.log(validator.isURL('https://www.example.com')) // true)
// console.log(validator.isURL('http/www.example.com')) // false)
// console.log(validator.isAlpha('abcdefghijklmnopqrstuvwxyz')) // true)
// console.log(validator.isAlpha('abcdefghijk123456789lmnopqrstuvwxyz')) // false)
// console.log(validator.isAlphanumeric('abcdefghijklmnopqrstuvwxyz1234567')) // true)
// console.log(validator.matches('abc123', /^[a-zA-Z0-9]+$/)) //true)

// import {Chalk} from 'chalk';
// npm install chalk
const chalk = require('chalk')

const greenMsg = chalk.red.underline.inverse.bold('Success!')
const greenMs = chalk.blue.underline.inverse.bold('Yakub!')
console.log(greenMsg, greenMs)

// input from user

// console.log(process.argv)
// console.log(process.argv[2])

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// Argument parsing with yargs

const yargs = require('yargs')

// console.log(process.argv)
// Customize yargs version
yargs.version('1.1.0')

// Add A Notes

const notes = require('./notes.js')

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Adding a new notes!', argv)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNotes()
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

