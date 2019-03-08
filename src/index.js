import React from 'react';
import ReactDOM from 'react-dom';
import { TasksDayView } from './TasksDayView';
import { sampleTasks } from './sampleData';

ReactDOM.render(
    <TasksDayView tasks={sampleTasks}/>,
    document.getElementById('root')
);