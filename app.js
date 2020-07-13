// Load Core Modules

// Load Third-Party modules
const chalk = require('chalk')
const yargs = require('yargs')

// Load Own Modules
const notes = require('./notes.js')

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
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Delete Note Command
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
    handler: function(argv) {
        console.log(chalk.red.bold(argv.title) + " note has been deleted.")
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
    handler: function(argv) {
        console.log(chalk.red.bold(argv.title) + " being read")
    }
})

// List All Notes Command
yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler: function(argv) {
        console.log('Listing all notes')
    }
})

yargs.parse()
