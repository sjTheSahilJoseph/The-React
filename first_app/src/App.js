import Video from "./components/Video";
import "./App.css";
import dataa from './data/data'
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
    const [data, setData] = useState(dataa);

    function handleAddVideo(e) {
        e.stopPropagation();

        setData([...data,
        {
            id: data.length + 1,
            title: "title x",
            channel: "chanell x",
            time: "25 minutes ago",
            views: "1M views",
            verified: true,
        }
        ]
        )


        console.log("handleAddVideo");
    }

    return (
        <>
            <div className="App" onClick={() => { console.log("app") }}>
                <div>
                    <button onClick={handleAddVideo}>Add Video</button>
                </div>
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

                <Counter />
            </div>
        </>
    );
}

export default App;
