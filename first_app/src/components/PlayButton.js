import './PlayButton.css';

// We can take props using this syntax as well. This is called destructuring

function PlayButton({message="Default", name="Name"}) {

    function handleClick() {
        // console.log({message});
        // Here we don't have to use {}.

        console.log(message);
    }


    return (
        <>

            <button
            onClick={handleClick}
            >
        {name}
            </button>

        </>
    );

}

export default PlayButton;
