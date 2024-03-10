import "./App.css";
import dataa from './data/data'
import { useContext, useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";

// useRef
// useRef hook is used when we have to perform DOM programming.

function App() {
    const [edv, setEdv] = useState(null);

    function dataReducer(data, action) {
        switch (action.type) {
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
        dispatch({ type: 'DELETE', payload: id });
    }


    const [themeState, setThemeState] = useState('lightmode');

    return (
        <>
            <ThemeContext.Provider value={themeState}>
                <VideosContext.Provider value={data}>
                    <VideoDispatchContext.Provider value={dispatch}>
                        <button onClick={() => {
                            setThemeState(themeState == 'darkmode' ? 'lightmode' : 'darkmode');
                        }}>
                            Mode
                        </button>
                        <div className={`App ${themeState}`}>
        <Counter/>
                            <AddVideo edv={edv} />
                            <VideoList updateVideo={updateVideo} deleteVideo={deleteVideo} />

                        </div>
                    </VideoDispatchContext.Provider>
                </VideosContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
