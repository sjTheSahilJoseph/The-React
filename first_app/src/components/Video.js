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

    // We can't make async useEffect call back function, but we can create a function inside useEffect, and make it async, then call that function inside useEffect.
    useEffect(()=>{
        async function fun() {
            console.log('fun');
        }
        fun();
    },[]);


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
