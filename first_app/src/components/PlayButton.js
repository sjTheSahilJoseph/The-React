import './PlayButton.css';

// Now console.log() is calling everytime because it is an expression. And it'll always call when render.
// We use custom functions, or arrow functions.
// By the way, these are called eventHandlers which handles the event.
// By doing this, we say that this is defined but not executed, when the person clicks, this will be executed.
function PlayButton() {


    return (
        <>

            <button
            onClick={() => console.log('this')}
            >
                Play
            </button>

        </>
    );

}

export default PlayButton;
