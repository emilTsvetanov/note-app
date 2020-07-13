// Load core modules
const fs = require('fs')

const getNotes = function() {
    return('Your notes...')
}

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
        console.log('New Note added!')
    } else {
        console.log('Note title taken!')
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

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Remove note by title
const removeNote = function(title) {

}

// Read a note by title
const readNote = function(title) {

}

// List all notes
const  listNotes = function() {

}

module.exports = {
    getNotes: getNotes,
    loadNotes: loadNotes,
    addNote: addNote,
    readNote: readNote,
    listNotes: listNotes
}