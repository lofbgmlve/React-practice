import World from "./World";
import styles from "./Hello.module.css";
export default function Hello(){

  function showName(){
    console.log("mike");
  }
  function showAge(age){
    console.log(age);
  }

 // function showText(e){
  //  console.log(e.target.value);
  //}
  return ( 
  <div>
       <h1>Hello</h1>
      <button onClick={showName}>show name</button>
      <button onClick={() => {
        showAge(10);
      }}
       >
        show age
        </button>
       <input type="text" 
       onChange={e => {
        console.log(e.target.value);
       }}
       />
  </div>
  );
}