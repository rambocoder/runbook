import React from 'react';
import { createContainer } from './domManipulator';
import { AppointmentForm } from '../src/AppointmentForm';

describe('AppointmentForm', () => {
    let render, container;

    beforeEach(() => {
        ({render, container} = createContainer())
    });

    const form = id => container.querySelector(`form[id="${id}"]`);
    const field = name => form('appointment').elements[name];

    it('renders a form', () => {
        render(<AppointmentForm/>);
        expect(form('appointment')).not.toBeNull();
    });

    describe('Service field', () => {
        const findOption = (dropdownNode, textContent) => {
            const options = Array.from(dropdownNode.childNodes);
            return options.find(
              option => option.textContent === textContent
            );
          };
          
        it('renders a select box', () => {
            render(<AppointmentForm />);
            expect(field('service')).not.toBeNull();
            expect(field('service').tagName).toEqual('SELECT');
        });
        it('initially has a blank value chosen', () => {
            render(<AppointmentForm />);
            const firstNode = field('service').childNodes[0];
            expect(firstNode.value).toEqual('');
            expect(firstNode.selected).toBeTruthy();
        });
        it('lists all services', () => {
            const selectableServices = ['Install', 'Upgrade'];
            render(
                <AppointmentForm selectableServices={selectableServices} />
            );
            const optionNodes = Array.from(field('service').childNodes);
            const renderedServices = optionNodes.map(node => node.textContent);
            expect(renderedServices).toEqual(expect.arrayContaining(selectableServices));
        });
        it('pre-selects the existing value', () => {
            const services = ['Install', 'Uninstall'];
            render(
              <AppointmentForm
                selectableServices={services}
                service="Install"
              />
            );
            const option = findOption(
              field('service'),
              'Install'
            );
            expect(option.selected).toBeTruthy();
          });
          
    });

});