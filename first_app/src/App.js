import Video from "./components/Video";
import "./App.css";
import dataa from './data/data'
import PlayButton from "./components/PlayButton";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {
    const [data, setData] = useState(dataa);

    function setDatta(video) {
        // we'll get video object and then do the rest here.
        
        setData(
            [...data,
                {...video, id: data.length + 1}
            ]
        );
    }

    return (
        <>
            <div className="App">
        <AddVideo setDatta={setDatta}/>
                {
                    data.map((video) => {
                        return (
                            <Video key={video.id} id={video.id} verified={video.verified} title={video.title} channel={video.channel} time={video.time} views={video.views}>
                                {
                                    <PlayButton onPause={() => { console.log("Pause", video.title) }} onPlay={() => { console.log("Play", video.title) }} message='Play'>
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
