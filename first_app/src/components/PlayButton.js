import './PlayButton.css';


function PlayButton({onPlay, onPause, children}) {

    let play = true;
    function handleClick() {
        if (play) {
        onPlay();
        play = false;
        } else {
            onPause();
        play = true;
        }
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
