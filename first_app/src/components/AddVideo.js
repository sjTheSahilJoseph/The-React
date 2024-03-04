import './AddVideo.css';

function AddVideo() {

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleChange(e) {

        console.log(e);
    }

    // I'm using onSubmit on form, as it is form property.
    // but we can use it on button as well (submit button inside form);
    // It'll handle when form will be submit.
    // We use e.preventDefault();
    // to prevent page loading while form submission.

    // On inputs. we use onChange handlers to see if the input value is change or not.
    return (
        <>
            <form onSubmit={handleSubmit}>
        
                <div>

                    <input type="text" placeholder='title' onChange={handleChange} />
                    <input type="text" placeholder='views' onChange={handleChange} />

                </div>
                <div>
                    <button>Add Video</button>
                </div>
            </form>
        </>
    );
}


export default AddVideo;
