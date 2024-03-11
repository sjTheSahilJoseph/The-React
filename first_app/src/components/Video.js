import { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideosDispatch';
import './Video.css';

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let verified = props.verified;
    let id = props.id;
    let children = props.children;
    let updateVideo = props.updateVideo;


    const theme = useContext(ThemeContext);
    const dispatch = useVideoDispatch();

    useEffect(() => {
        const idint = setInterval(() => {
            console.log("video playing", id);
        }, 10000);

        return ()=>{

            // Here we clean the interval.

            clearInterval(idint);

            // Now it's not runnig twice, because of the logic, it is running twice but we're cleaning the setInterval by id.
            // Also, now if we unmount the component, its effect will also stop.
            // Because now we are cleaning up.

        }
    }, [id]);
    // Now if we delete the video, means unmounting, the effect will keep running.
    // Technically it's called memory leak.
    // So for that, we have 3rd thing in useEffect which is its cleanup function,
    // Where we return a function, it's its cleanup function.

    return (

        <>
            <div className={`container ${theme}`}>
                <button onClick={() => {
                    dispatch({ type: 'DELETE', payload: id })
                }} className='close'>X</button>
                <button onClick={() => { updateVideo(id) }} className='update'>U</button>
                <div className='pic'>
                    <img src="https://placehold.co/500x200" />
                </div>
                <div className='title'>{title}</div>

                <div className='channel'>{channel} {id} {verified && 'VERIFIED'}</div>

                <div className='views'>{views} views <span>.</span> {time}</div>

                {children}

            </div>
        </>

    );

}

export default Video;
