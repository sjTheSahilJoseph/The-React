import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        // now it'll update all. If we click. Because now the value is previous + 1. Not just one single value + 1.

        console.log("handleIncrement", number);

    }

    return (

        <>

            <h1 style={{ color: 'white' }}>{number}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
