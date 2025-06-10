import "./App.css";
import MovieCards from "./components/MovieCards";

function App() {
  return (
    <>
      <MovieCards movie={{ title: "Tims Films", release_date: "2024" }} />
    </>
  );
}

export default App;
