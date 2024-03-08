import "./App.css";
import dataa from './data/data'
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    const [edv, setEdv] = useState(null);
    function deleteVideo(id) {
        setData(
            data.filter(video => video.id !== id)
        );
    }
    function updateVideo(id) {
            let d = data.find(video => video.id === id);
        console.log(d);
            setEdv(d);
    }

    const [data, setData] = useState(dataa);

    function setDatta(video) {
        setData(
            [...data,
            { ...video, id: data.length + 1 }
            ]
        );
    }

    function edvd(video) {
        let index = data.findIndex(d=>d.id===video.id);

        const nvdv = [...data]
        nvdv.splice(index, 1, video);
        setData(
            nvdv
        );
    }
    return (
        <>
            <div className="App">
                <AddVideo edv={edv} edvd={edvd} setDatta={setDatta} />
                <VideoList updateVideo={updateVideo} deleteVideo={deleteVideo} data={data} />

            </div>
        </>
    );
}

export default App;
