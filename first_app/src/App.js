import "./App.css";
import dataa from './data/data'
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    // const [data, setData] = useState(dataa);
    const [edv, setEdv] = useState(null);

    function dataReducer(data, action) {
        switch(action.type) {
            case 'ADD':
                return [...data,
            { ...action.video, id: data.length + 1 }
            ]
            case 'DELETE':
                return data.filter(video => video.id !== action.payload)
            case 'UPDATE':
                let index = data.findIndex(d => d.id === action.payload.id);
                console.log(index);
                const nvdv = [...data]
                nvdv.splice(index, 1, action.payload);
                setEdv(null);
                return nvdv
            default:
                    return data;
        }
    }

    const [data, dispatch] = useReducer(dataReducer, dataa);

    function deleteVideo(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateVideo(id) {
        let d = data.find(video => video.id === id);
        console.log(d);
        setEdv(d);
    }


    function setDatta(video) {
        dispatch({type: 'ADD', payload: video});
    }

    function edvd(video) {
        dispatch({type: 'UPDATE', payload: video});
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
