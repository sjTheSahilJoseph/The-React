import './PlayButton.css';


function PlayButton({onPlay, onPause, children}) {

    let play = true;
    function handleClick(e) {
        console.log(e);
        // SyntheticBaseEvent.
        // This is made by react basically modified by react, otherwise it is availabe in HTML with event object.
        //
        // To avoid event bubbling.
        e.stopPropagation();

        if (play) {
        onPlay();
        } else {
            onPause();
        }

        play = !play;
        // This will reverse the statement, like if this is true, it'll make it false, and if its false, then it'll make it true;
    }


    return (
        <>

            <button
            onClick={handleClick}
            >
        {children}
            </button>

        </>
    );

}

export default PlayButton;
