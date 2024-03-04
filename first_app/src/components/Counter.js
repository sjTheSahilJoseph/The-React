import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number=>number+1);
    }

    return (

        <>

            <h1 style={{ color: 'white' }}>{number}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
