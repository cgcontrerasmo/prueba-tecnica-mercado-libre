import "../src/styles/main.scss";
import Loading from "components/atoms/loading/Loading";
import Navbar from "components/molecules/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventProvider } from "context/EventContext";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("pages/home/Home"));
const Detail = lazy(() => import("pages/detail/Detail"));

function App() {
  return (
    <EventProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/items" Component={Home} />
            <Route path="/items/:id" Component={Detail} />
          </Routes>
        </Suspense>
      </Router>
      <Loading />
    </EventProvider>
  );
}

export default App;
