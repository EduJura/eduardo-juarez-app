import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import { Home, AboutUs, ContactUs } from "./pages";
import { TaskList } from "./components";
//import { getBaseURL } from "./utils";

function App(): JSX.Element {
  //const baseURL = getBaseURL();   
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <TaskList />
    </>
  );
}

export default App;
