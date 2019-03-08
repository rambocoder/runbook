import React, { useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import { createContainer } from './domManipulator';
import { CustomerForm } from '../src/CustomerForm';


describe('CustomerForm', () => {
    let render, container : Element;    

    const form : any = (id : string) => container.querySelector(`form[id="${id}"`);

    const expectToBeInputFieldOfTypeText  = formElement  => {
        expect(formElement).not.toBeUndefined();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }

    const customerNameField : any = () => form('customer').elements.customerName;

    beforeEach(() => {
        ({render, container} = createContainer());
    });

    it('renders a form', () => {
        render(<CustomerForm/>);
        expect(form('customer')).not.toBeNull();
    });

    it('renders the name field as text box', () => {
        render(<CustomerForm/>);
        const field = customerNameField();
        expectToBeInputFieldOfTypeText(field);
    });

    it('includes the existing value for the first name', () => {
        render(<CustomerForm customerName="Joe"/>);
        const field = customerNameField();
        expect(field.value).toEqual("Joe");
    });

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);
    it('renders a label for the customer name field', () => {
        render(<CustomerForm/>);
        expect(labelFor('customerName')).not.toBeUndefined();
        expect(labelFor('customerName').textContent).toEqual('Customer name');
    });
    it('assign an id that matches the label id to the first name field', () => {
        render(<CustomerForm/>);
        expect(customerNameField().id).toBe('customerName');
    });

    it('saves existing customer name when submitted', async () => {
        expect.hasAssertions();
        render(
            <CustomerForm customerName="Mike" onSubmit={( { customerName }) => expect(customerName).toEqual('Steve')} />
        );
        await ReactTestUtils.Simulate.change( customerNameField(), { target: { value: 'Steve'}})
        await ReactTestUtils.Simulate.submit(form('customer'));
    });
});



