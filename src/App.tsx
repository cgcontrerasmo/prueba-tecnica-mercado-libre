import "../src/styles/main.scss";
import Detail from "pages/detail/Detail";
import Home from "pages/home/Home";
import Loading from "components/atoms/loading/Loading";
import Navbar from "components/molecules/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventProvider } from "context/EventContext";

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
