import React, { useState } from 'react';


export const CustomerForm = ({ customerName, onSubmit }) => {
    const [customer, setCustomer] = useState( { customerName } );

    const handleChangeCustomerName = ({ target }) => setCustomer(customer => ({
        ...customer,
        [target.name]: target.value
    }));

    const handleSubmit = () => onSubmit(customer);

    return (
    <form id='customer' onSubmit={ handleSubmit }>
        <label htmlFor="customerName">Customer name</label>
        <input type='text' id="customerName" name="customerName" value={ customerName } onChange={handleChangeCustomerName} />
        <input type='submit' value='Add'/>
    </form>
    )
};