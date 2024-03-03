import './PlayButton.css';

// Now console.log() is calling everytime because it is an expression. And it'll always call when render.
// We use custom functions, or arrow functions.
// By the way, these are called eventHandlers which handles the event.
// By doing this, we say that this is defined but not executed, when the person clicks, this will be executed.


// We just write name of the function, we don't call it.

function PlayButton() {

    // typically we use these handleFunctions, or EventHandlers.
    // This is just a convention to name it like this {handle<eventName>} but we can use any name.
    function handleClick() {
        console.log("clicked");
    }


    return (
        <>

            <button
            onClick={handleClick}
            >
                Play
            </button>

        </>
    );

}

export default PlayButton;
