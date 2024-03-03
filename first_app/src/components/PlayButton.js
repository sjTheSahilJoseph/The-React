import './PlayButton.css';


function PlayButton({message="Default", children}) {

    function handleClick() {
        console.log(message);
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
