import React from "react";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withCounter from "./WithCounter";

const Counter2 = ({counter, incCount}) => {
    return (
        <>
            <button onClick={incCount}> <FontAwesomeIcon icon={ faComment } color="seaGreen" /> {counter}</button>
        </>
    )
}

export default withCounter(Counter2)