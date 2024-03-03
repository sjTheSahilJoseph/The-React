import './Video.css';

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let verified = props.verified;

    // We can also pass null in ternary operator.
    // Why it is working? Because ternrary returns the jsx. But if else don't.
    return (

        <>
            <div className='container'>
                <div className='pic'>
                    <img src="https://placehold.co/500x200" />
                </div>
                <div className='title'>{title}</div>

        { verified ? <div className='channel'>{channel} verified</div> :  <div className='channel'>{channel}</div>}

                <div className='views'>{views} views <span>.</span> {time}</div>
            </div>
        </>

    );

}

export default Video;
