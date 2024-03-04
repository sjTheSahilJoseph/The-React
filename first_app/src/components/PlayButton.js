import { useState } from 'react';
        console.log(e);
import './PlayButton.css';

// Every element has its own copy of state, and everything stuff.
// They are independant

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
