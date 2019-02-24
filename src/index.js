import React from 'react';
import ReactDOM from 'react-dom';
import { TasksDayView } from './Runbook';
import { sampleTasks } from './sampleData';

ReactDOM.render(
    <TasksDayView tasks={sampleTasks}/>,
    document.getElementById('root')
);