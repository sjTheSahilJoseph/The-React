import Video from "./components/Video";
import "./App.css";

function App() {
    // As this is JSX, we can use JavaScript things as well. Like passing props using javaScript Object and then using spread operator.
    let data = {
        title: "title x",
        channel: "chanell x",
        time: "25 minutes ago",
        views: "1M views"
    }
    return (
        <>
            <div className="App">
                <Video title="Title 1" channel="SJ" time="1 minute ago" views="10k" />
                <Video title="Title 2" channel="JS" views="1k" time="10 minutes ago" />
                <Video channel="JS" views="1k" time="10 minutes ago" />
                <Video {...data}/>
            </div>
        </>
    );
}

export default App;
