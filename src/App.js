import React, { useContext, useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Pages/Header";

export const StateContext = React.createContext();

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  const CheckButtons = () => {
    useEffect(() => {
      const dots = document.getElementsByClassName("dot");
      console.log(dots.length);
      const links = document.getElementsByClassName("link");
      console.log(links);
      console.log(count);
    }, [count]);
  };

  return (
    <Router>
      {/* <StateContext.Provider> */}
      <Header />
      <div className="container">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-active link" : "nav-inactive link"
            }
            id="1"
            onClick={() => CheckButtons()}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="2"
            onClick={() => setCount(count + 1)}
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="3"
            onClick={() => setCount(count + 1)}
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="4"
            onClick={() => setCount(count + 1)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* </StateContext.Provider> */}
    </Router>
  );
}
