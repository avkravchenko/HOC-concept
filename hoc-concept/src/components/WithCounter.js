import React, { useState } from "react";

const withCounter = (WrappedContainer) => {
    return function WithCounter() {
        const [counter, setCounter] = useState(0)

        const incCount = () => {
            setCounter(counter + 1)
        }

        return <WrappedContainer counter={counter} incCount ={incCount} />
    }
}

export default withCounter

