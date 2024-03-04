import { useState } from 'react';
import './PlayButton.css';


function PlayButton({onPlay, onPause, children}) {

    const [play, setPlay] = useState(false);

    function handleClick(e) {

        e.stopPropagation();

        if (play) {
        onPlay();
        } else {
            onPause();
        }

        setPlay(!play);

    }


    return (
        <>

            <button
            onClick={handleClick}
            >
        {children} : {play?'>':'||'}
            </button>

        </>
    );

}

export default PlayButton;
