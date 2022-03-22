import {combineReducers} from "redux";
import item from "./item"
import items from "./items"
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    whitelist: ["item", "items"],
    storage
};

const appReducer = combineReducers({
    item,
    items
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);