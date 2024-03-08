import { useContext, useEffect, useState } from 'react';
import VideoDispatchContext from '../context/VideoDispatchContext';
import './AddVideo.css';

function AddVideo({edv}) {

    const initState = {
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
        title: "",
        description: "",
        views: "",
    }

    const dispatch = useContext(VideoDispatchContext);

    const [video, setVideo] = useState(initState);

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        if (edv) {
        dispatch({type: 'UPDATE', payload: video});
        } else {
        dispatch({type: 'ADD', payload: video});
        }
        setVideo(initState);
    }

    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        });

    }

    useEffect(()=>{
        if (edv) {
        setVideo(edv)
        }
    }, [edv]);

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>

                    <input type="text" value={video.title} name='title' placeholder='title' onChange={handleChange} />
                    <input type="text" value={video.views} name='views' placeholder='views' onChange={handleChange} />
                </div>
                <div>
                    <button>{edv? "Edit" : "Add"} Video</button>
                </div>
            </form>
        </>
    );
}


export default AddVideo;
