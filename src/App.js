import { useState } from 'react'
import './App.css';



function App() {

  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(0)
  const [Sum, setSum] = useState(0)

  return (
    <div className="App" >
      <div className='calcFrame'><input name='value1' type='text' onChange={(e) => { setNum1(e.target.value) }} /></div>
      <div className='calcFrame'><input name='value2' type='text' onChange={(e) => { setNum2(e.target.value) }} /></div>
      <div className='calcFrame'><button variant="contained" onClick={() => setSum(parseInt(Num1) + parseInt(Num2))}>+</button></div>
      <div className='totalFrame'><h5 >Total {Sum}</h5></div>
    </div>
  );
}

export default App;
