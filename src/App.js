
import './App.css';
import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color,setColor] = useState('')
  const [error ,setError] = useState(false)
  const [list,setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <div className="App">
      <div className='title'>color generator</div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input type='text' 
            placeholder='#f15025' 
            value={color} 
            onChange={(e)=>setColor(e.target.value)} 
            className={`${error ? 'error' : null}`}
          />
          <button type='submit'>generate</button>
        </form>
        <div className='colors'>
          {list.map((color,index)=> {
            return <SingleColor  key={index} index={index}  {...color}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
