import { useRef, useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    let num = useRef(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number=>number+1);

        num.current++;
        
        console.log(num.current);
    }

    // Memoization
    // -- When we store a value as cache.
    // For Example:
    function fibonacci(n) {
        if (n === 1 || n === 0) {
            return 1;
        }
        return fibonacci(n-1) + fibonacci(n-2);
    }
    // When we put 40 as n. Our calculations will be slow.
    // -- using CPU

    let fib = fibonacci(30);

    return (

        <>

            <h1 style={{ color: 'white' }}>{fib}</h1>
            <h1 style={{ color: 'white' }}>{number}</h1>

            <h1 style={{ color: 'blue' }}>{num.current}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
