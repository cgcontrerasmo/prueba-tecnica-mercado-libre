import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/main.scss";
import Home from "pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
