import "./App.css";
import dataa from './data/data'
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    function deleteVideo(id) {

        setData(
            data.filter(video=>video.id!==id)
        );

    
        console.log(id);

    }

    const [data, setData] = useState(dataa);

    function setDatta(video) {
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
        <VideoList deleteVideo={deleteVideo} data={data}/>

            </div>
        </>
    );
}

export default App;
