import { useState } from 'react';
import './AddVideo.css';

function AddVideo({ setDatta }) {

    const initState = {
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
        title: "",
        description: "",
    }


    const [video, setVideo] = useState(initState);

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        setDatta(video);
        setVideo(initState);
    }

    function handleChange(e) {
        setVideo({
            ...video,

            [e.target.name]: e.target.value
        });

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>

                    <input type="text" value={video.title} name='title' placeholder='title' onChange={handleChange} />
                    <input type="text" value={video.description} name='description' placeholder='views' onChange={handleChange} />
                </div>
                <div>
                    <button>Add Video</button>
                </div>
            </form>
        </>
    );
}


export default AddVideo;
