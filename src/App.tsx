import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import { Home, AboutUs, ContactUs } from "./pages";
import { TaskList } from "./components";
import { getBaseURL } from "./utils";

function App(): JSX.Element {
  const baseURL = getBaseURL();   
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={baseURL} element={<Home />} />
        <Route path={baseURL + '/about-us'} element={<AboutUs />} />
        <Route path={baseURL + '/contact-us'} element={<ContactUs />} />
      </Routes>
      <TaskList />
    </>
  );
}

export default App;
