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

    // useEffect hook is used to perform any side effect.
    // Now, in strict mode, it'll run twice, but in production it won't.
    useEffect(()=>{
        console.log("video playing", id);
    }, []);

    // Pure function means that the returning value will not be vary based on some extra outer thing.
    // For example:
    function add1(a,b) {
        return a+b
    }
    // Impure function
    let n = 34;
    // Now this function will give returning value based on the n.
    function add2(a,b) {
        return a+b-n;
    }

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
