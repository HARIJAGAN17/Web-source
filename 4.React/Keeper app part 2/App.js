import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(val =>{
        return(<Note
          key = {val.key}
          title = {val.title}
          content = {val.content}
         />);
      })}
      <Footer />
    </div>
  );
}

export default App;
