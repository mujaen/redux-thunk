import {CREATE_ITEMS} from "./types";
import {DELETE_ITEMS} from "./types"

export const createItems = (items) => ({
    type: CREATE_ITEMS,
    payload: items
});

export const deleteItems = (items) => ({
    type: DELETE_ITEMS,
    payload: items
});