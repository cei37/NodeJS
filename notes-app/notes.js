const fs = require('fs');

const getNotes = function () {
    return fs.readFileSync('/Users/cei37/Programming/NodeJS/notes-app/notes.txt', 'utf8');
}

module.exports = getNotes;