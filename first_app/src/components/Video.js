import PlayButton from './PlayButton';
import './Video.css';

// Now we have to make functionality separate, If we pass a function as prop to this component, then it'll not work directly.
// Because, onClick only works on HTML Tags generally when treated as component stuff.
// To solve that, we have to call it in the component, we this is also a prop doesn't matter its value is function.
// // Keep in mind that the name onClick is just a name our custom name basically, it has nothing to do with functionality.

function Video(props) {

    let title = props.title || "Nothing";
    let channel = props.channel;
    let views = props.views;
    let time = props.time;
    let verified = props.verified;
    let id = props.id;

    return (

        <>
            <div className='container'>
                <div className='pic'>
                    <img src="https://placehold.co/500x200" />
                </div>
                <div className='title'>{title}</div>

        <div className='channel'>{channel} {id} {verified && 'VERIFIED'}</div>

                <div className='views'>{views} views <span>.</span> {time}</div>

        <PlayButton onClick={()=>{console.log("Play")}} message='Play'>
            Play
        </PlayButton>
        <PlayButton onClick={()=>{alert("Pause")}} message='Pause'>
            Pause
        </PlayButton>

            </div>
        </>

    );

}

export default Video;
