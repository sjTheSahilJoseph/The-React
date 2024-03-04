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
        setDatta(video);
    }

    function handleChange(e) {
        setVideo({...video,

                [e.target.name]: e.target.value
        });

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
