import {CREATE_ITEM} from "./types";

const initialState = {
    seqNo: "",
    month: "",
    day: "",
    itemC: "",
    itemNm: "",
    inform: "",
    qty: "",
    unitAmt: "",
    chgAmt: "",
    taxAmt: "",
    remark: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ITEM:
            return {
                ...state,
                seqNo: action.payload.seqNo,
                month: action.payload.month,
                day: action.payload.day,
                itemC: action.payload.itemC,
                itemNm: action.payload.itemNm,
                inform: action.payload.inform,
                qty: action.payload.qty,
                unitAmt: action.payload.unitAmt,
                chgAmt: action.payload.chgAmt,
                taxAmt: action.payload.taxAmt,
                remark: action.payload.remark
            };
        default:
            return state;
    }
};

export default reducer;