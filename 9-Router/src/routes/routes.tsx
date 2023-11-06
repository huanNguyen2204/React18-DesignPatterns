import { Routes, Route } from "react-router-dom";

import App from "../App";

import Home from "../components/Home";
import Contact from "../components/Contact";
import Contacts from "../components/Contacts";
import About from "../components/About";
import Error404 from "../components/Error404";

const AppRoutes = () => {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path=":contactId" element={<Contacts />}/>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </App>
  );
};

export default AppRoutes;
