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
  const [count, setCount] = useState(0);
  
  // useEffect(() => {
  //   (async function () {
  //     try {
  //     } catch {
  //       console.log("error");
  //     }
  //   })();
  // }, [navLinkArray]);

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
              isActive ? "nav-active" : "nav-inactive"
            }
            id="1"
            onClick={() => setCount(count + 1)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="2"
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="3"
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
            id="4"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* </StateContext.Provider> */}
    </Router>
  );
}
