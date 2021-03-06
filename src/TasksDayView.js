import React, { useState } from 'react';

const taskTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const Task = ({ startsAt, customer, service, notes, status }) => {
    let task = (
    <div id='Task'>
        <h3>Current task at {taskTimeOfDay(startsAt)}</h3>
        <table>
            <tbody>
                <tr>
                    <td>Customer Name</td>
                    <td>{customer.customerName}</td>
                </tr>
                <tr>
                    <td>Service</td>
                    <td>{service}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{status}</td>
                </tr>
                <tr>
                    <td>Notes</td>
                    <td>{notes}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
    return task;
};

export const TasksDayView = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState(0);
    return (
    <div id='TasksDayView'>
        <ol>
            {tasks.map((task, i) => (
                <li key={task.startsAt}>
                    <button type='button' className={
                        i == selectedTask ? 'toggled' : ''
                    } 
                    onClick={()=> setSelectedTask(i)}>{taskTimeOfDay(task.startsAt)}</button>
                </li>
            ))}
        </ol>
        
        {tasks.length === 0 ? (<div>No Tasks today</div>) : (<Task {...tasks[selectedTask]}/>)}
    </div>
    );
}
