import Video from "./components/Video";
import "./App.css";

function App() {
    return (
        <>
            <div className="App">
                <Video title="Title 1" channel="SJ" time="1 minute ago" views="10k" />
                <Video title="Title 2" channel="JS" views="1k" time="10 minutes ago" />
                <Video channel="JS" views="1k" time="10 minutes ago" />
            </div>
        </>
    );
}

export default App;
