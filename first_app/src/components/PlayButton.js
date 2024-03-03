import './PlayButton.css';


function PlayButton({onPlay, onPause, children}) {

    let play = true;
    function handleClick() {
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
