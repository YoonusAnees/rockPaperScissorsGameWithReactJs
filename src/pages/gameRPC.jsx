import React from 'react';
import { Icon } from '@iconify/react';

export default function GameRPC() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Rock Paper Scissors Game</h1>
      <h2>Single Player</h2>
     
      <div style={{display:"flex" , gap:"1px"}}>
        <div style={{width:"50%" , backgroundColor:"red"}}>
            <h3>Computer</h3>
            <div>
                <Icon icon="twemoji:rock" width="36" height="36" />
            </div>

            
        </div>
        <div style={{width:"50%" , backgroundColor:"blue"}}>
            <h3>You</h3>
        </div>
      </div>
    </div>
  )
}
