import React from 'react';
import ReactDOM from 'react-dom';
import { TasksDayView } from './TasksDayView';
import { sampleTasks } from './sampleData';
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