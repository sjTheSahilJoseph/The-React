import "./App.css";
import dataa from './data/data'
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    const [data, setData] = useState(dataa);

    function setDatta(video) {
        setData(
            [...data,
                {...video, id: data.length + 1}
            ]
        );
    }

    // Now we sent data to sibling
    return (
        <>
            <div className="App">
        <AddVideo setDatta={setDatta}/>
        <VideoList data={data}/>

            </div>
        </>
    );
}

export default App;
