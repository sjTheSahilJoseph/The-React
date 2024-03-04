import { useState } from 'react';
import './AddVideo.css';

function AddVideo({setDatta}) {

    const [video, setVideo] = useState({
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
}
    );

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
    console.table(video);
        setDatta();
        // we can use this same  as any othre function
        // But now what about old video? Because we have to mantain it
    }

    function handleChange(e) {
        console.log(e.target.name, e.target.value);
        setVideo({...video,

                [e.target.name]: e.target.value
        });

        console.log(video);
    }

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
