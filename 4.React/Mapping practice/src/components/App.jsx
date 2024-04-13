import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";


function createEntry(entry){
 return <Card
     key = {entry.id}
     emoji = {entry.emoji}
     name = {entry.name}
     meaning = {entry.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1> 
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
