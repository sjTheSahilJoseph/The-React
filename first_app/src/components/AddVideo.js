import {useEffect, useRef, useState } from 'react';
import useVideoDispatch from '../hooks/VideosDispatch';
import './AddVideo.css';

function AddVideo({edv}) {

    const inputRef = useRef(null);

    const initState = {
        time: 'dadsfdsa',
        channel: 'dfad',
        verified: true,
        title: "",
        description: "",
        views: "",
    }


    const [video, setVideo] = useState(initState);

    const dispatch = useVideoDispatch();

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

        // When we have to focus by default.
        // inputRef.current.focus();
        //

        inputRef.current.placeholder = "";

        inputRef.current.focus();
        "Type here".split('').forEach((char, i)=> {
            setTimeout(()=>{
                inputRef.current.placeholder = inputRef.current.placeholder + char;
            }, 100*i);
        })


    }, [edv]);

    // we have to pass ref prop our ref, it'll have its object in current.

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>

                    <input ref={inputRef} type="text" value={video.title} name='title' placeholder='title' onChange={handleChange} />
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
