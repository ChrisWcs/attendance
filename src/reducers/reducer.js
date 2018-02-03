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
            const {dayIndex, studentIndex, studentBool} = action;
            return {
                ...state,
                attendance: [
                    ...state.attendance.slice(0, dayIndex),
                    [
                        ...state.attendance[dayIndex].slice(0, studentIndex),
                        studentBool,
                        ...state.attendance[dayIndex].slice(studentIndex + 1),
                    ],
                    ...state.attendance.slice(dayIndex + 1),
                ],
            };
        default:
            return state;
    }
};