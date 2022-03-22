import {CREATE_ITEM} from "./types";

export const createItem = (seqNo, month, day, itemC, itemNm, inform, qty, unitAmt, chgAmt, taxAmt, remark) => ({
    type: CREATE_ITEM,
    payload: {
        seqNo,
        month,
        day,
        itemC,
        itemNm,
        inform,
        qty,
        unitAmt,
        chgAmt,
        taxAmt,
        remark
    }
});