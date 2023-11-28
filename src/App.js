import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#~@$%&*)({}][`}?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="App">
      <div className='w-full mx-w-md mx-auto mx-auto shadow-md-rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
      <h1 className='text-center text-white my-3'>password generator</h1>
      <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password'/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
         <div className='flex items-center gap-x-1'>
          <input type='range'
          name=''
          id=''
          min={6}
          max={100}
          value={length}
          className='curser-pointer'
          onChange={(e)=>{setLength(e.target.value)}}

          />
          <label>length:{length}</label>
         </div>
      </div>
    </div>
  );
}

export default App;
