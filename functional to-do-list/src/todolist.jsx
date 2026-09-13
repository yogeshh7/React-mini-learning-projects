import React, { useState } from "react";
import upimg from './assets/images/up-arrow.svg';
import downimg from './assets/images/down-arrow.svg';

function ToDoList() {
    
    const [tasks, setTasks] = useState(["Study For 2 Hours", "Take A Shower", "Go To The Gym"]);
    const [newTask, setNewTask] = useState("");

   
    function handleEventChange(e) {
        setNewTask(e.target.value);
    }

    function AddTask() {
        
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask(""); 
        }
    }

    function RemoveTask(index) {
        
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function MovePriorUp(index) {
        
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function MovePriorDown(index) {
        
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="container-title">Functional To Do List</h1>
                <input
                    type="text"
                    placeholder="Enter Your Tasks.."
                    onChange={handleEventChange}
                    value={newTask}
                />

                <button className="Add-btn" onClick={AddTask}>
                    Add
                </button>
            </div>
            
            <ol>
                {tasks.map((eachtask, index) => (
                    <li key={index}>
                        <span className="text">{eachtask}</span>
                        
                        <button className="Remove-btn" onClick={() => RemoveTask(index)}>
                            Remove
                        </button>
                        
                        <button className="Up-btn-img" onClick={() => MovePriorUp(index)}>
                            <img src={upimg} alt="upward image" />
                        </button>

                        <button className="Down-btn-img" onClick={() => MovePriorDown(index)}>
                            <img src={downimg} alt="downward image" />
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default ToDoList;
