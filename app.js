// Load core modules
const fs = require('fs')

// Load Third-Party modules
const chalk = require('chalk')
const yargs = require('yargs')

// Load Own Modules
const notes = require('./notes.js')

// Create(Add) Note command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('New note as added.')
    }
})

// Remove  note
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
        console.log('New note as added.')
    }
})

yargs.parse()
