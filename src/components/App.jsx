import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes.js";

function createNote(note) {
    return (
        <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    );
}

function App() {
    return (
        <div>
            <Header />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;