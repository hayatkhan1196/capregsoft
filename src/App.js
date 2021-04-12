
import './App.css';
 


const red=()=>{
  alert('red function callled');
}
function App(props) {
  return (
    
    <div onClick={red}>{props.text}</div>



  );
}

export default App;
