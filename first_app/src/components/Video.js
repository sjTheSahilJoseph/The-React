import './Video.css';

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let verified = props.verified;
    let id = props.id;
    let children = props.children;
    let deleteVideo = props.deleteVideo;



    return (

        <>
            <div className='container'>
        <button onClick={()=>{deleteVideo(id)}} className='close'>X</button>
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
