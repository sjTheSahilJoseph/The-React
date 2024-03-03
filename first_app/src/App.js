// Relative Path
import Video from "./components/Video";

// Components are re-usable.

// But the data is same. How can we change the data inside component?
// We use props for that to pass data.

function App() {
  return (
      <>

      <Video/>
      <Video/>
      <Video/>
      <Video/>

      </>
  );
}

export default App;
