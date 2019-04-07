import React from 'react';
import ReactDOM from 'react-dom';

export const TaskForm = (props) => {
    const handleChangeCustomerName = () => null;
    return (
        <form id='task'>
            <h2>Task Form</h2>
            <select name='status' value={props.status} readOnly>  
            <option/>
            {props.selectableStatuses.map(s => (<option key={s}>{s}</option>))}            
            </select>
        </form>
    );
};

TaskForm.defaultProps = {
    selectableStatuses: [
        'Open',
        'Complete'
    ]
};