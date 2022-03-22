import React, {useEffect, useState} from "react";
import './App.css';
import styled from "styled-components";
import ItemsBox from "./components/organisms/ItemsBox";
import {useDispatch, useSelector} from "react-redux";
import {createItems} from "./modules/items";

const StyledContent = styled.div`
    width: 734px;
`;

const App = () => {
    const [onDemand, setOnDemand] = useState(false);
    const [inputArray, setInputArray] = useState([]);
    const item = useSelector((state) => state.item);
    const items = useSelector((state) => state.items.arr);
    const dispatch = useDispatch();

    const sortJsonArray = (name, arr) => {
        arr.sort((a, b) => {
            if(a[name] < b[name]) return -1;
            if(a[name] > b[name]) return 1;
        })
        return arr;
    };

    const shiftItemArray = (arr) => {
        if(arr[0].seqNo === "") {
            arr.shift();
        }

        return arr;
    };

    //직접 입력값값
    useEffect(() => {
        setOnDemand(true);
        if(onDemand) {
            item.chgAmt = Math.floor(Number(item.qty) * Number(item.unitAmt));
            const arrays = items.filter((arr) => Number(arr.seqNo) !== Number(item.seqNo));
            dispatch(createItems(shiftItemArray(sortJsonArray("seqNo", arrays.concat([item])))));
        }
    }, [item]);

    return (
        <StyledContent>
            <ItemsBox inputArray={items} />
        </StyledContent>
    );
}

export default App;
