import { useCallback, useMemo, useRef, useState } from "react";


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

    // useCallBack is used to memoize the function.
const fibc = useCallback(function fibonacci(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}, [])

    const value = useMemo(() => fibc(fib), [fib]);

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
