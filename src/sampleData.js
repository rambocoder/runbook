const today = new Date();

const at = hours => today.setHours(hours, 0);
// TODO: remove once back-end API is written
export const sampleTasks = [
    { startsAt: at(9), customer: {firstName: 'Mike'}},
    { startsAt: at(10), customer: {firstName: 'Joe'}},
    { startsAt: at(17), customer: {firstName: 'Jim'}},
];