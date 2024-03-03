import './Video.css';

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let children = props.children;
    let channelJSX;
    let verified = true;

    if (verified) {
    channelJSX = <div className='channel'>{channel} verified</div>
    }
        // We can use this as variable.
    else {
    channelJSX = <div className='channel'>{channel}</div>
    }

    return (

        <>
            <div className='container'>
                <div className='pic'>
                    <img src="https://placehold.co/500x200" />
                </div>
                <div className='title'>{title}</div>
        {channelJSX}
                <div className='views'>{views} views <span>.</span> {time}</div>
        {children}
        {// That's how we can use children prop. It is a component.
        }
            </div>
        </>

    );

}

export default Video;
