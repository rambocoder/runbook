import React, { useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import { createContainer } from './domManipulator';
import { CustomerForm } from '../src/CustomerForm';


describe('CustomerForm', () => {
    let render, container: Element;

    const form: any = (id: string) => container.querySelector(`form[id="${id}"`);

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeUndefined();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }

    const field: any = (name: string) => form('customer').elements[name];

    beforeEach(() => {
        ({ render, container } = createContainer());
    });

    it('renders a form', () => {
        render(<CustomerForm />);
        expect(form('customer')).not.toBeNull();
    });


    const rendersTextbox = fieldName => {
        it('renders the name field as text box', () => {
            render(<CustomerForm />);
            expectToBeInputFieldOfTypeText(field(fieldName));
        });
    };

    const itIncludeExistingValueForFieldValue = fieldName => {
        it('includes the existing value for the first name', () => {
            render(<CustomerForm {...{ [fieldName]: 'some value' }} />);
            expect(field(fieldName).value).toEqual('some value');
        });
    };

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);
    const itRendersALabel = (fieldName, labelText) => {
        it('renders a label for the customer name field', () => {
            render(<CustomerForm />);
            expect(labelFor(fieldName)).not.toBeUndefined();
            expect(labelFor(fieldName).textContent).toEqual(labelText);
        });
    };
    const itLabelMatchFieldName = id => it('assign an id that matches the label id to field', () => {
        render(<CustomerForm />);
        expect(field(id).id).toBe(id);
    });

    const itSubmitsNewValue = () => it('saves new field value when submitted', async () => {
        expect.hasAssertions();
        render(
            <CustomerForm customerName="Mike" onSubmit={({ customerName }) => expect(customerName).toEqual('Steve')} />
        );
        await ReactTestUtils.Simulate.change(field('customerName'), { target: { value: 'Steve', name: 'customerName' } })
        await ReactTestUtils.Simulate.submit(form('customer'));
    });

    describe('customer name field', () => {
        rendersTextbox('customerName');
        itIncludeExistingValueForFieldValue('customerName');
        itRendersALabel('customerName', 'Customer name');
        itLabelMatchFieldName('customerName');
        itSubmitsNewValue();
    });

    it('has a submit button', () => {
        render(<CustomerForm/>);
        const submitButton = container.querySelector('input[type="submit"]');
        expect(submitButton).not.toBeNull();
    })
});



