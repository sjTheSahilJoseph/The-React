import Video from "./components/Video";
import "./App.css";
import data from './data/data'
import PlayButton from "./components/PlayButton";

// Event Bubbling will happen same as HTML.

function App() {
    return (
        <>
            <div className="App">
        {
            data.map((video)=>{
                return (
                <Video key={video.id} id={video.id} verified={video.verified} title={video.title} channel={video.channel} time={video.time} views={video.views}>
                    {
        <PlayButton onPause={()=>{console.log("Pause", video.title)}} onPlay={()=>{console.log("Play", video.title)}} message='Play'>
            Toggle Play Pause
        </PlayButton>
                    }
                    </Video>
                )
            })
        }
            </div>
        </>
    );
}

export default App;
