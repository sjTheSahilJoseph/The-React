import { useRef, useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    // This will always re-initialized when compoent renders.
    // Now if we make this a state, then the downside is that using state means we have to re-render the component for no reason.
    // So we'll use useRef
    let num = useRef(0);
    // Ref is always an object.
    // The current value, is stored in num.current

    function handleIncrement(e) {

        e.stopPropagation();

        setNumber(number=>number+1);

        num.current++;
        
        console.log(num.current);
        // now it is working fine, without having to re-render

        // num will always be 0-1 when this component re-renders. so It means its value will never be increamented.
        // If we have to implement the function to see that how many times this thing have runned.
        // we can use useRef
    }

    return (

        <>

            <h1 style={{ color: 'white' }}>{number}</h1>

            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
