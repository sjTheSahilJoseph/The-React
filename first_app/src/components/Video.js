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

    // We use use-effect when we have to do somethign after rendering.
    
    // For example. If we write something before return <></>
    // It will create problems, because the component isn't rendered, but we executed something before JSX, for example useRef.
    // So we use useEffect to do somethings after the component returns Jsx.
    // There can me many useEffects in the same component.

    // Component life-cycle.
    // Mount = First render
    // Re-render = re-runs
    // Unmounting = Removing the component form DOM.


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
