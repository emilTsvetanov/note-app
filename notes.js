// Load core modules
const fs = require('fs')

// Load Third Party modules
const chalk = require('chalk')

// Add note
const  addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })   
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    console.log(notes)
}

// Load All Notes from JSON file
const loadNotes = function() {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] //same if there is no file
    }

    
}

// Save Notes to FS
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Remove note by title
const removeNote = function(title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    

}

// Read a note by title
const readNote = function(title) {

}

// List all notes
const  listNotes = function() {
    const notes = loadNotes()
    console.log(notes)
}

module.exports = {
    addNote: addNote,
    readNote: readNote,
    listNotes: listNotes,
    removeNote: removeNote
}