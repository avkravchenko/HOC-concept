import React from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withCounter from "./WithCounter";

const Counter1 = ({counter, incCount}) => {
    return (
        <>
            <button onClick={incCount}> <FontAwesomeIcon icon={ faHeart } color="red" /> {counter}</button>
        </>
    )
}

export default withCounter(Counter1)