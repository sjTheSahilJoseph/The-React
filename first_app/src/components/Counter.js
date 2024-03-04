import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    function handleIncrement(e) {

        e.stopPropagation();

        setTimeout(()=>{
        // This will change the state by one if we click even multiple times as well.
        // setNumber(number + 1);
        // setNumber(number + 1);
        setNumber(number=>number+1);
            // Now number param is its previous value.
            // and then it is going in qeuau kind of.
            // So now it'll console log 1, 2, 3, if we press the button 3 4 times continoulsy.
            // But it'll chagne the state by 3 4 5 or how much time we pressed the button.
    }, 2000)

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
