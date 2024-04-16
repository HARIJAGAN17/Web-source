import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const [items,setItems] = useState([]);

 function addItems(item){
    setItems((prev)=>{
      return [...prev,item]
    })
    console.log(items);
    event.preventDefault();
 }
 function deleteItems(id){
  setItems((prev)=>{
    return prev.filter((value,index)=>{
      return index !== id;
    })
  })
 }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addItems}/>
      {items.map((item,index)=>{
       return <Note onDelete={deleteItems} key={index} id={index} title={item.title} content={item.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
