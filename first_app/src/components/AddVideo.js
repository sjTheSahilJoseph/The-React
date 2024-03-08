import { useEffect, useState } from 'react';
import './AddVideo.css';

function AddVideo({ dispatch, edv}) {

    const initState = {
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
        title: "",
        description: "",
        views: "",
    }


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

    // useEffect will run when our component will mount.// mount means render.
    // It is used to perform any side effect.
    // // It take one calback function, and then dependencie array.
    // // If the array is empty, it'll run only only once, and if it has some array, it'll run everytime their values change.
    // // If we don't provied [] then it'll infinitely run.
    // // it will run once when this component will mount, and then each time edv values will change.
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
