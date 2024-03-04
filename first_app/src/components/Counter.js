import { useState } from "react";

function Counter() {
    // Keep in mind that if we print the value of number, it'll tell its previous, because of the control flow.
    // Simple as that.

    // Normal Variable.
    // let number = 0;
    
    // State Variable.
    const [number, setNumber] = useState(0);
    // Name is just convention. But it is more common to use setName, name. like this
    // This syntax is 'destructured array'.
    // We need to make two things in array, 1 is the state variable, second is function to update its value.
    // Then we need to use useSate(default initial value);
    // setNumber is called "setter function".

    function handleIncrement(e) {

        e.stopPropagation();

        // Normal way to increment normal variable.
        // number++;
        // Now it'll increment but the UI won't render its updated value.
        // So in order to update the UI with latest value, we need to make it a state variable using useState hook.


        // State Update.
        // number++; -> wrong, we can't change state directly
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