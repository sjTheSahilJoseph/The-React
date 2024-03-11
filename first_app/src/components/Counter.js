import { useMemo, useRef, useState } from "react";

// We should put this function outside of the Component, because it is not a component specific function.
function fibonacci(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function Counter() {
    const [number, setNumber] = useState(0);

    let num = useRef(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number => number + 1);

        num.current++;

        console.log(num.current);
    }


    let fib = 30;

    const value = useMemo(() => fibonacci(fib), [fib]);
    // {} = wrong
    // // [] means that the caluculation will be same until dependencies will not be changed.
    // It'll again hang at re-render, but not with any other stuff.

    // Dependencey array where we add those variables which could impact on the result.

    return (

        <>

            <h1 style={{ color: 'green' }}>{value}</h1>
            <h1 style={{ color: 'white' }}>{number}</h1>

            <h1 style={{ color: 'blue' }}>{num.current}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
