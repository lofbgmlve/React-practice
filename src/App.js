
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
 
  return (
    <div className="App">
      <h1 style={
{
  color:'#f00',
  borderRight : '2px solid #000'
}
        
      }>Hello</h1>
      <Hello />
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
