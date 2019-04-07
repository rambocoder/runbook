import React, { useState } from 'react';

export const CustomerForm = ({ customerName, onSubmit }) => {
    const [customer, setCustomer] = useState( { customerName } );

    const handleChangeCustomerName = ({ target }) => setCustomer(customer => ({
        ...customer,
        customerName: target.value
    }));
    return (
    <form id='customer' onSubmit={ () => onSubmit(customer) }>
        <h2>Customer Form</h2>
        <label htmlFor="customerName">Customer name</label>
        <input type='text' id="customerName" name="customerName" value={ customerName } onChange={handleChangeCustomerName} />
    </form>
    )
};