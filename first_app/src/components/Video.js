import './Video.css';

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let verified = props.verified;

    // We can also use 'short circuit' '&&' if both values are true then it'll execute.
    // Otherwise, it'll not run.
    // // But sometimes, it'll create trouble with numbers, like if the prop will pass 0, it'll print 0, and if 2, then it'll be true and run next thing.
    return (

        <>
            <div className='container'>
                <div className='pic'>
                    <img src="https://placehold.co/500x200" />
                </div>
                <div className='title'>{title}</div>

        <div className='channel'>{channel} {verified && 'VERIFIED'}</div>

                <div className='views'>{views} views <span>.</span> {time}</div>
            </div>
        </>

    );

}

export default Video;
