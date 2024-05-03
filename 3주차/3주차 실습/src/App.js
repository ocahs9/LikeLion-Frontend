import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [counter, setCounter] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(()=>{
    setFlash(true);
    setTimeout(()=>{
      setFlash(false);
    },500)
  },[counter])
  
  const addFunc = () => {
    setCounter((prev)=> prev+1);
  };

  const minusFunc = () => {
    setCounter((prev)=> prev-1);
  };

  return (
    <div className="App">
      <div className={flash ? 'counter flash' : 'counter' } >{counter}</div>
      <div className='BtnBox'>
        <button className='addBtn' onClick={addFunc}>+1</button>
        <button className='minusBtn' onClick={minusFunc}>-1</button>
      </div>
    </div>
  );
}

export default App;
