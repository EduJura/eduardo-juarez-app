import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Skills, Projects, Contact, ToDo } from "./pages";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className='container mx-auto max-w-screen-lg my-32'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/to-do' element={<ToDo />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
