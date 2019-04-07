import React from 'react';
import ReactDOM from 'react-dom';
import { TasksDayView } from './TasksDayView';
import { sampleTasks } from './sampleData';
import { TaskForm } from './TaskForm';
import { CustomerForm } from './CustomerForm';

const selectableStatuses = [
    'Open',
    'Running',
    'Complete'
];

ReactDOM.render(
    (
    <div>
        <TaskForm  selectableStatuses={ selectableStatuses } />
        <TasksDayView tasks={sampleTasks}/>
        <CustomerForm/>
    </div>
    ),
    document.getElementById('root')
);