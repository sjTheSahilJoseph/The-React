import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        // It is incrementing by 1. It doesn't matter how many times we change state in click, Because on first time change it re-renders the whole component with the value.
        // No no, basically the value of previous so the control is working but the value is 1 every time. that's why we are updated it to + 1. That's the reason.


        console.log("handleIncrement");

    }

    return (

        <>

            <h1 style={{ color: 'white' }}>{number}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
