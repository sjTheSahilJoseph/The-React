import Video from "./components/Video";
import Com from "./components/Com";
import "./App.css";
import data from './data/data'

// Also data outside the src folder is not supported.

function App() {
    // As this is JSX, we can use JavaScript things as well. Like passing props using javaScript Object and then using spread operator.
    // names should match 100%.
    // We can use higher-order functions like map.
    // It'll take an callback function which return JSX. Using an iterator.

    // In data, there should be an ID or any unique property.
    // Basically a key prop.
    // It's name should be "key" key prop. We're not gonna use it or we can but not key but another id propery with same value. But still, it is important.
    return (
        <>
            <div className="App">
        {
            data.map((video)=>{
                return (
                <Video key={video.id} id={video.id} verified={video.verified} title={video.title} channel={video.channel} time={video.time} views={video.views} />
                )
            })
        }
            </div>
        </>
    );
}

export default App;
