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


import { Provider } from 'react-redux';
import {ExampleComponent, List, Form} from './redux/ExampleComponent';
import Post from './redux/Posts';
import store from './redux/ExampleStore';
import { addArticle } from './redux/ExampleAction';
window.store = store;
window.addArticle = addArticle;



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