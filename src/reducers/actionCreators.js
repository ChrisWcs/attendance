import {MARK_DAY, ADD_DAY, ADD_STUDENT} from './actions';

export const createMarkDay = (dayIndex, studentIndex, studentBool) => ({
    type: MARK_DAY,
    dayIndex,
    studentIndex,
    studentBool,
});

export const createAddDay = (day) => ({
    type: ADD_DAY,
    day,
});

export const createAddStudent = (student) => ({
    type: ADD_STUDENT,
    student,
});