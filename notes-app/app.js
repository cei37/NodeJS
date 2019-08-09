const yargs = require('yargs');
const notes = require('./notes.js');
const chalk = require('chalk');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Removing a new note!!')
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'Listing Notes',
    handler: function(argv) {
        console.log('These are your notes!!!')
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Reading a note!!')
        notes.readNote(argv.title)
    }
})

yargs.parse();