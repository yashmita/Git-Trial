import React from 'react';
import Note from './Note';

const AllNotes = ({ notes, toggle_note }) => {
    console.log(notes);
    return (
        <div className="my-3">
            <h3>All Notes</h3>
            <div className="row">
                {
                    notes.map(note => <Note key={note.id} note={note} toggle_note={toggle_note} />)
                }
            </div>
        </div>
    )
}

export default AllNotes;
