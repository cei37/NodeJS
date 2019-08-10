const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.green(element.title), chalk.green(element.body) )
    });
}

const readNote = (title) => {
    debugger
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title )
    if (!note) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse(note.title, note.body))
    }
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote) {
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
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}