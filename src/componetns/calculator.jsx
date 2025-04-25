import React, { useState } from 'react';

export default function Calculator() {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("0");

  const calculate = () => {
    // try {
    //   let sum = eval(calculation);
    //   setResult(sum);
    // // } catch (error) {
    // //   setResult("Error");
    // }
  };

  const addNumber = (num) => {
    setCalculation(calculation + num);
  };

  const clear = () => {
    setCalculation("");
    setResult("0");
  };

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '2px solid #ccc', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Calculator</h1>

      <div style={{ padding: '10px', marginBottom: '10px' }}>
        <input
          style={{
            width: '100%',
            height: '40px',
            fontSize: '18px',
            textAlign: 'center',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
          type="text"
          value={calculation}
          onChange={(e) => setCalculation(e.target.value)}
          placeholder='Enter The Equations '
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          padding: '10px 0'
        }}
      >
        {keys.map((keyValue) => (
          <button
            key={keyValue}
            onClick={() => addNumber(keyValue)}
            style={{
              padding: '20px',
              fontSize: '18px',
              borderRadius: '5px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          >
            {keyValue}
          </button>
        ))}
      </div>

      <div style={{ padding: '10px 0' }}>
        <button
          onClick={calculate}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Calculate
        </button>
      </div>

      <div style={{ padding: '10px 0' }}>
        <button
          onClick={clear}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            borderRadius: '5px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Clear
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p>Results: {result}</p>
      </div>
    </div>
  );
}
