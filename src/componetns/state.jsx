import React, { useEffect, useState } from 'react';

export default function State() {
  const [count, setCount] = useState(0);


  useEffect(()=>{
    console.log(count)
  },[count]);

//   useEffect(()=>{
//     console.log("Changed")
    
//   },[count]);

  return (
    <div style={styles.container}>
      <h1 style={styles.counter}>{count}</h1>
      
      <div style={styles.buttonContainer}>
        <button 
          onClick={() => setCount(count + 1)} 
          style={styles.button}>
          Add
        </button>
      </div>

      <div style={styles.buttonContainer}>
        <button 
          onClick={() => setCount(count - 1)} 
          style={styles.button}>
          Decrease
        </button>
      </div>
    </div>
  );
}

// Styles for the components
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: "'Arial', sans-serif",
    textAlign: 'center',
  },
  counter: {
    fontSize: '50px',
    color: '#34495e',
    marginBottom: '30px',
  },
  buttonContainer: {
    margin: '10px',
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s',
  },
};
