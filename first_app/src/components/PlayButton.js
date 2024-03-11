import { memo, useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import './PlayButton.css';

// We can also memoize the component, using memo hook
// momoized comonent don't re-renders until it's props are changing.
const PlayButton = memo(function PlayButton({onPlay, onPause, children}) {

    const theme = useContext(ThemeContext);

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
        className={theme}
            onClick={handleClick}
            >
        {children} : {play?'>':'||'}
            </button>

        </>
    );

})

export default PlayButton;
