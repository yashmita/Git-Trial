import React, {useState} from 'react';
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import ImportantNotes from './components/ImportantNotes';

const App = () => {

    const [notes, setNotes] = useState([]);

    const createNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    // copying the state because we cannot mutate the state
    const toggle_note = (id) => {
        const new_notes = notes.slice();
        // finding index of the note which needs to be toggled
        const index = new_notes.findIndex(note=>note.id === id);
        const note = new_notes[index];

        // creating a new note with same properties as note and overwriting the isImportant property
        const new_note = {
            ...note,
            isImportant: !note.isImportant,
        }
        // pushing the note at same index
        new_notes[index] = new_note;
        // updating the state
        setNotes(new_notes);
    }

    return(
        <>
        <h1 className="display-2 text-warning text-center">Note-It!</h1>
        <div className="container mt-3 p-3">
            <CreateNote createNote={createNote} />
            <hr />
            <ImportantNotes notes = {notes} toggle_note = {toggle_note} />
            <hr />
            <AllNotes notes = {notes} toggle_note = {toggle_note} />
        </div>
        </>
    );
};

export default App;