import {MARK_DAY, ADD_DAY, ADD_STUDENT} from './actions';

export const createMarkDay = () => ({
    type: MARK_DAY,
});

export const createAddDay = () => ({
    type: ADD_DAY,
});

export const createAddStudent = () => ({
    type: ADD_STUDENT,
});