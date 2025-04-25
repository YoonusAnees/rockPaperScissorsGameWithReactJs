import React, { useEffect } from 'react'
import { useState , useRef} from 'react'

function Count() {
const [count, setCount] = useState(0);
const countRef = useRef(0);
const userInputRef = useRef(null);

useEffect(()=>{
    console.log("count is updated");
    userInputRef.current.focus();
},[])

const handleClick =()=>{
   setCount(count+1);
//    countRef.current++;
}
  return (
 <div>
       <h1>{count}</h1>
       <button onClick={()=>handleClick()}>Increment</button>

       <div style={{paddingTop:"10px"}}>
        <input type="text" ref={userInputRef} placeholder='Enter Your Name' />
       </div>
 </div>
  )
}

export default Count