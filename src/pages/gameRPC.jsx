import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';


export default function GameRPC() {

    const [userChoice , setUserChoice] = useState("null");
    const [computerChoice , setComputerChoice] = useState("Rock");
    const [result , setResult] = useState("");

    useEffect(()=>{
      if(userChoice){  if(userChoice== computerChoice){
            setResult("Your Result is  Draw !!!")
        
        }else if(
            (userChoice=="Rock" && computerChoice=="Scissors") ||
            (userChoice=="Paper" && computerChoice=="Rock") ||
            (userChoice=="Scissors" && computerChoice=="Paper")
        ){
            setResult("Your Result is  Win !!!")
        }
        
        
        else{
            setResult("You lost Try Again");
        }
    }
    },[userChoice])

  return (
    <div style={{textAlign:"center"}}>
      <h1>Rock Paper Scissors Game</h1>
      <h2>Single Player </h2>
      <h3>{result}</h3>
     
    {!result ? (  <div style={{display:"flex" , gap:"1px"}}>
        <div style={{width:"50%" , backgroundColor:"yellowgreen"}}>
            <h3>You {userChoice}</h3>
         
         <div style={{display:'flex' , flexDirection:"column" , alignItems:"center"}}>
                <div className="choice" onClick={()=>{setUserChoice("Rock")}}>
                <Icon icon="twemoji:rock"  height="100"  />
                </div>
           <div className="choice"  onClick={()=>{setUserChoice("Paper")}}>
           <Icon icon="mingcute:paper-line"  height="100" />
           </div>
               <div className="choice" onClick={()=>{setUserChoice("Scissors")}}>
               <Icon icon="la:hand-scissors"  height="100" />
               </div>

            
         </div>

            
        </div>
        <div style={{width:"50%" , backgroundColor:"wheat"}}>
            <h3>Computer</h3>
        
          <div style={{display:'flex' , flexDirection:"column" , alignItems:"center"}}>
                <Icon icon="twemoji:rock"  height="100" />
                <Icon icon="mingcute:paper-line"  height="100" />
                <Icon icon="la:hand-scissors"  height="100" />

            </div>
        
        </div>
      </div>) : (
        <button onClick={()=>{setResult(null)}}>Results</button>
      )}
    </div>
  )
}
