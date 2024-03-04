import { useState } from "react";

function Counter() {

    // Normal Variable.
    // let number = 0;
    
    // State Variable.
    const [number, setNumber] = useState(0);
    // This syntax is 'destructured array'.
    // We need to make two things in array, 1 is the state variable, second is function to update its value.
    // Then we need to use useSate(default initial value);

    function handleIncrement(e) {

        e.stopPropagation();

        // Normal way to increment normal variable.
        // number++;
        // Now it'll increment but the UI won't render its updated value.
        // So in order to update the UI with latest value, we need to make it a state variable using useState hook.


        // State Update.
        setNumber(number+1);

        // Now it'll work fine.
        // Basically react will re-render the component with the updated state value.
        // When state will update, the component will re-render.

        console.log("handleIncrement");

    }

    return (

        <>

            <h1 style={{color: 'white'}}>{number}</h1>
            
            <button onClick={handleIncrement}>Increment</button>

        </>

    );

}

export default Counter;
