const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return fs.readFileSync('/Users/cei37/Programming/NodeJS/notes-app/notes.txt', 'utf8');
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green('New note added'), 'Title: ', title, 'Body: ',body)
    } else {
        console.log(chalk.red('The note is duplicated   '), 'Title: ', title, 'Body: ',body)
    }

    saveNotes(notes);
}

const removeNote = function(title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep);
    }
}

const saveNotes = function( notes ) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}