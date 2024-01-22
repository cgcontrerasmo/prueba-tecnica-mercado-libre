import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/main.scss";
import Home from "pages/home/Home";
import Detail from "pages/detail/Detail";
import Navbar from "components/molecules/navbar/Navbar";
import { EventProvider } from "context/EventContext";
import Loading from "components/atoms/loading/Loading";

function App() {
  return (
    <EventProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/items" Component={Home} />
          <Route path="/items/:id" Component={Detail} />
        </Routes>
      </Router>
      <Loading />
    </EventProvider>
  );
}

export default App;
