import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full bg-dark">
        <div className="relative flex w-full h-full md:max-w-screen-xl">
          <LeftSidebar />
          <Routes>
            <Route path="/" Component={Homepage} errorElement={ErrorPage} />
          </Routes>
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
