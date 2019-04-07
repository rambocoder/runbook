import React from 'react';
import ReactDOM from 'react-dom';

import { createContainer } from './domManipulator';
import { TaskForm } from '../src/TaskForm';

describe('TaskForm', () => {
    let container;
    let customer;
    let render;
    const form  = (id) => container.querySelector(`form[id="${id}"`);
    const field = (name) => form('task').elements[name];
    const findOption = (dropdownNode, textContent) => {
        const options = Array.from(dropdownNode.childNodes);
        return options.find(option => option.textContent == textContent);
    }

    beforeEach(() => {
        ({render, container}  = createContainer() );
    });    
    
    it('renders a form', () => {        
        render(<TaskForm />);
        expect(form('task')).not.toBeUndefined();
    });

    describe('status field', () => {
        it('renders as a select box', () => {
            render(<TaskForm/>);
            expect(field('status')).not.toBeUndefined();
            expect(field('status').tagName).toEqual('SELECT');
        });
        it('initially has a blank select status box', () => {
            render(<TaskForm/>);
            const firstNode = field('status').childNodes[0];
            expect(firstNode.value).toEqual('');
            expect(firstNode.selected).toBeTruthy();
        });
        it('list all statuses', () => {
            const selectableStatuses = [
                'Open',
                'Running',
                'Complete'
            ];
            render(<TaskForm selectableStatuses={ selectableStatuses } />);
            // Array.from takes snapshot of childNodes
            const optionNodes = Array.from(field('status').childNodes);
            const renderedStatuses = optionNodes.map(node => node.textContent);
            expect(renderedStatuses).toEqual(
                expect.arrayContaining(selectableStatuses)
            );
        });
        it('preselects the existing value', () => {
            const statuses = ['Open', 'Complete'];
            render(<TaskForm selectableStatuses={ statuses } status='Open' />);
            const option = findOption(field('status'), 'Open');
            expect(option.selected).toBeTruthy();
        });


    });
});