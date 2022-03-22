import {CREATE_ITEMS, DELETE_ITEMS} from "./types";

const reducer = (state = {arr: []}, action) => {
    switch (action.type) {
        case CREATE_ITEMS:
            return {
                ...state,
                arr: [...action.payload]
            };
        case DELETE_ITEMS:
            return {
                ...state,
                arr: [...action.payload]
            };
        default:
            return state;
    }
};

export default reducer;