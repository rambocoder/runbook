import React, { useState, useCallback } from 'react';

export const AppointmentForm = ({ selectableServices, service, startsAt }) => {

    const [appointment, setAppointment] = useState({
        service,
        startsAt
      });
    

    const handleServiceChange = ({ target: { value } }) =>
    setAppointment(appointment => ({
      ...appointment,
      service: value
    }));


    return (
    <form id="appointment">
        <select name="service" value={service} onChange={handleServiceChange}>
            <option/>
            {selectableServices.map(s => (
                <option key={s}>{s}</option>
            ))}
        </select>
    </form>);
}

AppointmentForm.defaultProps = {
    selectableServices: [
        'Install',
        'Upgrade',
        'Uninstall'
    ]
}