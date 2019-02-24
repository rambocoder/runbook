import React, { useState } from 'react';

const taskTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const Task = ({ customer }) => <div>{customer.firstName}</div>;

export const TasksDayView = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState(0);
    return (
    <div id='TasksDayView'>
        <ol>
            {tasks.map((task, i) => (
                <li key={task.startsAt}>
                    <button type='button' onClick={()=> setSelectedTask(i)}>{taskTimeOfDay(task.startsAt)}</button>
                </li>
            ))}
        </ol>
        
        {tasks.length === 0 ? (<div>No Tasks today</div>) : (<Task {...tasks[selectedTask]}/>)}
    </div>
    );
}
