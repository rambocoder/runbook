import { Task } from './entities';

const today = new Date();

const at = hours => today.setHours(hours, 0);
// TODO: remove when back-end API is written
export const sampleTasks = [
    new Task(at(1), {firstName: 'Antonio'}),
    { startsAt: at(9), customer: {firstName: 'Mike'}},
    { startsAt: at(10), customer: {firstName: 'Joe'}},
    { startsAt: at(17), customer: {firstName: 'Jim'}},
];