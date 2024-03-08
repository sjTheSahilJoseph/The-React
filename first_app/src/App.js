import "./App.css";
import dataa from './data/data'
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
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

    function updateVideo(id) {
        let d = data.find(video => video.id === id);
        console.log(d);
        setEdv(d);
    }

    function deleteVideo(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    return (
        <>
            <div className="App">
                <AddVideo dispatch={dispatch} edv={edv}  />
                <VideoList dispatch={dispatch}updateVideo={updateVideo} deleteVideo={deleteVideo} data={data} />

            </div>
        </>
    );
}

export default App;
