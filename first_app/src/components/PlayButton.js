import './PlayButton.css';


function PlayButton({onClick, children}) {

    function handleClick() {
        onClick();
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
