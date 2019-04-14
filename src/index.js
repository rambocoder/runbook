import React from 'react';
import ReactDOM from 'react-dom';
import { TasksDayView } from './TasksDayView';
import { sampleTasks } from './sampleData';
<<<<<<< HEAD
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
=======
import { CustomerForm } from './CustomerForm';
import {ExampleComponent, List, Form} from './ExampleComponent';
import Post from './Posts';


import store from './ExampleStore';
import { addArticle } from './ExampleAction';
window.store = store;
window.addArticle = addArticle;

import { Provider } from 'react-redux';


const Element = <div>Elemenet is here</div>;

ReactDOM.render(
    <div>
        
    <TasksDayView tasks={sampleTasks}/>
    <CustomerForm customerName="Joe"/>
    </div>,
>>>>>>> 7bed437dc0b2c27b117ddbcffabc2eb59a121db2
    document.getElementById('root')
);

ReactDOM.render(
<Provider store={store}>
<ExampleComponent />
<List />
<h2>Add</h2>
<Form />
<div>
    <Post />
    </div>
</Provider>, document.getElementById('root'));