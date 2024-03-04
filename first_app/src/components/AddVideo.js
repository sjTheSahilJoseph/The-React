import { useState } from 'react';
import './AddVideo.css';

function AddVideo() {

    const [video, setVideo] = useState({
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
}
    );

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleChange(e) {
        console.log(e.target.name, e.target.value);
        // Now we'll get value of input
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

                    <input type="text" name='title' placeholder='title' onChange={handleChange} />
                    <input type="text" name='description' placeholder='views' onChange={handleChange} />

                </div>
                <div>
                    <button>Add Video</button>
                </div>
            </form>
        </>
    );
}


export default AddVideo;
