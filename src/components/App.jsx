import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3000").then((res) => {
  //     return setNotes(res.data);
  //   });
  // }, []);

  function addNote(newNote) {
    // Axios.get("http://localhost:3000").then((res) => {
    //   return setNotes(res.data);
    // });

    // Axios.post("http://localhost:3000/api/post", {
    //   title: newNote.title,
    //   content: newNote.content,
    // }).then(() => {
    //   console.log("ok");
    // });

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(nid) {
    // Axios.delete(`http://localhost:3000/${nid.delid}`).then(() => {
    //   console.log("Deleted.");
    // });

    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== nid.id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            delid={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
