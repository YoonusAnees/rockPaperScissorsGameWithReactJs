import { useState } from "react";
import React from 'react';

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  
  // Function to add a new to-do task
  const addToDo = () => {
    setToDoList([...toDoList, { task: toDo, completed: false }]);
    setToDo("");
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    const updatedList = [...toDoList];
    updatedList[index].completed = !updatedList[index].completed;
    setToDoList(updatedList);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        style={styles.input}
      />
      <button onClick={addToDo} style={styles.button}>Add Task</button>
      
      <div style={styles.listContainer}>
        {toDoList.length > 0 ? (
          toDoList.map((item, index) => (
            <div 
              key={index} 
              style={item.completed ? styles.completedTask : styles.incompleteTask}
            >
              <span>{item.task}</span>
              <button
                onClick={() => toggleCompletion(index)}
                style={styles.toggleButton}
              >
                {item.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
            </div>
          ))
        ) : (
          <p>No tasks available today</p>
        )}
      </div>
    </div>
  );
}

// Styles for the components
const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "'Arial', sans-serif"
  },
  heading: {
    color: "#2c3e50",
    fontSize: "36px",
  },
  input: {
    padding: "10px",
    width: "60%",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listContainer: {
    marginTop: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  incompleteTask: {
    backgroundColor: "#ecf0f1",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #bdc3c7",
  },
  completedTask: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #27ae60",
  },
  toggleButton: {
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
