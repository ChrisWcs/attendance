import {ADD_DAY, ADD_STUDENT, MARK_DAY} from './actions';

export default reducer = (state, action) => {
    switch(action.type){
        case ADD_DAY:
            return {
                ...state,
                days: [...state.days, action.day],
                attendance: [...state.attendance, []],
            };
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.student, action.student]
            };
        case MARK_DAY:
            return {

            };
        default:
            return state;
    }
};