import Video from "./components/Video";
import "./App.css";
import dataa from './data/data'
import PlayButton from "./components/PlayButton";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {
    const [data, setData] = useState(dataa);

    return (
        <>
            <div className="App" onClick={() => { console.log("app") }}>
        <AddVideo setDatta={setData}/>
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
