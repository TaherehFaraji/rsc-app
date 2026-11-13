'use client'
import { useState } from 'react';

function ClientTodoList({ todos }) {

    const [tasks, setTasks] = useState(todos);
    const [input, setInput] = useState('');

    function addTask() {
        if (!input.trim()) return;

        const task = {
            id: Date.now(),
            title: input,
            completed: false
        };

        setTasks([...tasks, task]);
        setInput('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleTask(id) {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={addTask}>
                    Add
                </button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span
                            onClick={() => toggleTask(task.id)}
                            style={{
                                textDecoration: task.completed
                                    ? 'line-through'
                                    : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {task.title}
                        </span>

                        <button onClick={() => deleteTask(task.id)}
                            style={{
                                color: '#d9363e',
                                margin: '5px'
                            }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientTodoList;