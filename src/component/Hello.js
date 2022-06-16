import World from "./World";
import styles from "./Hello.module.css";
import {useState} from "react";
export default function Hello(){


 //let name = "Mike"
 const [name, setName] = useState('Mike');

 function changeName(){
 // const newName = name === "Mike" ? "Jane" : "Mike";
  console.log(name);
  //document.getElementById("name").innerText = name;
  setName(name === "Mike" ? "Jane" : "Mike");
 }
  return ( 
  <div>
       
       <h2 id="name">{name}</h2>
       <button onClick={changeName}>Change</button>
      
  </div>
  );
}