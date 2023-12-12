import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import longLogo from "/image/long-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-clight sticky-top">
      <div className="container-xl">
        <Navbar collapseOnSelect expand="md" className="position-static ">
          <div className="container-fluid">
            <Navbar.Brand>
              <Link to="/">
                <img src={longLogo ? longLogo : ""} height={"50"} alt="" />
              </Link>
            </Navbar.Brand>

            <button onClick={() => setIsOpen(!isOpen)} className="btn btn2">
              <i className="fa-solid fa-bars"></i>
            </button>

            <Nav
              className="res-nav"
              ref={menuRef}
              style={{ left: isOpen ? "0" : "-500px" }}
            >
              <ul className="navbar-nav res-nav2 w-100 gap-2">
                {isOpen && (
                  <div className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand to="/">
                      <img style={{ width: "140px" }} src={longLogo} alt="" />
                    </Navbar.Brand>
                    <div className="icon">
                      <i
                        onClick={() => setIsOpen(!isOpen)}
                        className="fa-solid fa-xmark"
                      ></i>
                    </div>
                  </div>
                )}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link items ${isActive ? "actives" : ""}`
                    }
                    to="/"
                  >
                    হোম
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
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
