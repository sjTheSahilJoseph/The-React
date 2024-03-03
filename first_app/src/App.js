// Relative Path
import Video from "./components/Video";

// Components are re-usable.

// But the data is same. How can we change the data inside component?
// We use props for that to pass data.

// We can set our own name and value of it.

function App() {
  return (
      <>

      <Video title="Title 1"/>
      <Video title="Title 2"/>
      </>
  );
}

export default App;
