import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
// when not defined as defaul export
import {
    Task,
    TasksDayView
} from '../src/TasksDayView';

// react component, function or module
// behavior driven development
// chasing green
describe('Task', () => {
    let container;
    let customer;
    beforeEach(() => {
        container = document.createElement('div');
    });
    const render = (component) => { ReactDOM.render(component, container); }
    // test, starts with present tense verb, it refers to the noun you used to name your suite
    it('renders the customer first name', () => {
        customer = { customerName: 'Alex' };
        render(<Task customer={customer} />);
        expect(container.textContent).toMatch('Alex');

    });
    it('renders another customer first name', () => {
        customer = { customerName: 'Joe' };
        render(<Task customer={customer} />);
        expect(container.textContent).toMatch('Joe');

    });

});

describe('TasksDayView', () => {
    // Arrange
    let container;
    const today = new Date();
    const tasks = [{
        startsAt: today.setHours(10,0),
        customer: {customerName: 'Alex'}
    }, {
        startsAt: today.setHours(12,0),
        customer: {customerName: 'Joe'}
    }];
    beforeEach(() => {
        container = document.createElement('div');
    });
    const render = (component) => { ReactDOM.render(component, container); }
    // test, starts with present tense verb, it refers to the noun you used to name your suite
    it('renders a div with the right id', () => {
        // Act
        render(<TasksDayView tasks={[]} />);
        // Assert
        expect(container.querySelector('div#TasksDayView')).not.toBeNull();
    });
    it('renders multiple Tasks', () => {
        render(<TasksDayView tasks={tasks} />);        
        expect(container.querySelector('ol') && container.querySelector('ol').children).toHaveLength(2);

    });
    it('renders each Task in li', () => {
        render(<TasksDayView tasks={tasks} />);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(container.querySelectorAll('li')[0].textContent).toEqual('10:00');
        expect(container.querySelectorAll('li')[1].textContent).toEqual('12:00');
    });
    it('initially shows that there are no Tasks', () => {
        render(<TasksDayView tasks={[]} />);
        expect(container.textContent).toMatch('No Tasks today');
    });
    it('selects first Task by default', () => {
        render(<TasksDayView tasks={tasks} />);
        expect(container.textContent).toMatch('Alex');
    });
    it('has a button in each li', () => {
        render(<TasksDayView tasks={tasks} />);
        expect(container.querySelectorAll('li > button')).toHaveLength(2);
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
    });
    it('renders another Task when selected', () => {
        render(<TasksDayView tasks={tasks} />);
        let button = container.querySelectorAll('button')[1];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch('Joe');
    });
    it('adds toggled class to button when selected', () => {
        render(<TasksDayView tasks={tasks} />);
        const button = container.querySelectorAll('button')[1];
        ReactTestUtils.Simulate.click(button);
        expect(button.className).toMatch('toggled');
    });
    it('does not add toggled class to button when not selected', () => {
        render(<TasksDayView tasks={tasks} />);
        const button = container.querySelectorAll('button')[1];        
        expect(button.className).not.toMatch('toggled');
    });
});

