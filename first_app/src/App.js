import Video from "./components/Video";
import Com from "./components/Com";
import "./App.css";

function App() {
    // As this is JSX, we can use JavaScript things as well. Like passing props using javaScript Object and then using spread operator.
    // names should match 100%.
    let data = {
        title: "title x",
        channel: "chanell x",
        time: "25 minutes ago",
        views: "1M views",
        verified: true,
    }
    return (
        <>
            <div className="App">
                <Video verified={true} title="Title 1" channel="SJ" time="1 minute ago" views="10k" />
                <Video verified={false} title="Title 2" channel="JS" views="1k" time="10 minutes ago" />
                <Video verified={true} channel="JS" views="1k" time="10 minutes ago" />
                <Video {...data}/>
                <Video verified={false} channel="JS" views="1k" time="10 minutes ago" children={<Com/>}/>
            </div>
        </>
    );
}

export default App;
