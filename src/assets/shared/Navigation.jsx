import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const openNavbar = () => {
    setIsOpen(true);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="bg-clight">
      <div className="container-xl">
        <Navbar collapseOnSelect expand="md" className="position-static">
          <div className="container-fluid">
            <Navbar.Brand>
              <Link to="/">
                <img src="./image/long-logo.png" height={"50"} alt="" />
              </Link>
            </Navbar.Brand>

            <button onClick={openNavbar} className="btn btn2">
              <i className="fa-solid fa-bars"></i>
            </button>

            <Nav
              className="res-nav"
              ref={menuRef}
              style={{ left: isOpen ? "0" : "-500px" }}
            >
              <ul className="navbar-nav gap-2">
                <div className="d-block d-md-none py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand to="/">
                      <img src="./image/long-logo.png" height={"60"} alt="" />
                    </Navbar.Brand>
                    <div className="icon">
                      <i
                        onClick={closeNavbar}
                        className="fa-solid fa-xmark"
                      ></i>
                    </div>
                  </div>
                </div>
                <li className="nav-item ">
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link items ${isActive ? "actives" : ""}`
                    }
                    to="/"
                  >
                    হোম
                  </NavLink>
                </li>
                <li className={`nav-item`}>
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link items ${isActive ? "actives" : ""}`
                    }
                    to="/about"
                  >
                    আমাদের সম্পর্কে
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link items ${isActive ? "actives" : ""}`
                    }
                    to="/gallery"
                  >
                    গ্যালারি
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link items ${isActive ? "actives" : ""}`
                    }
                    to="/contact"
                  >
                    যোগাযোগ
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;