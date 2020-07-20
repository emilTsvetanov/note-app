// Load Core Modules

// Load Third-Party modules
const chalk = require('chalk')
const yargs = require('yargs')

// Load Own Modules
const notes = require('./notes.js')

// Customize yargs version
yargs.version = '1.1.0'

// Add Note Command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove Note Command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        // console.log(chalk.red.bold(argv.title) + " note has been deleted.")
        notes.removeNote(argv.title)
    }
})

// Read Note Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
       notes.readNote(argv.title)
    }
})

// List All Notes Command
yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler: argv => {
        console.log('Listing all notes..')
        notes.listNotes()
    }
})

yargs.parse()
