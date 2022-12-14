import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { UnAuth } from "../redux/action/index";
import { Feeds } from "./Feeds";
import { Midsection } from "./Midsection";
import { Widgets } from "./Widgets";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  const list = useSelector((state) => state.todo);
  const navigate = useNavigate();
  const getData = () => {
    const userdetail = list;

    setCurrentUser({ ...currentUser, ...userdetail });
  };

  const Check = () => {
    console.log("Yes");
    let a = "BIL@GMAIL.COM";
    const n = String(a).toLowerCase().match("bil@gmail.com");
    console.log(n);
  };

  const Logout = () => {
    dispatch(UnAuth());
    navigate("/login");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        style={{
          border: "2px solid red",
        }}
      >
        <header>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky" style={{ paddingTop: "80px" }}>
              <div className="list-group list-group-flush mx-3 mt-4">
                <a
                  href="#hm"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </a>
                <a
                  href="#hk"
                  className="list-group-item list-group-item-action py-2 ripple "
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Webiste traffic</span>
                </a>
                <a
                  href="#hl"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-lock fa-fw me-3"></i>
                  <span>Password</span>
                </a>
                <a
                  href="#hj"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-line fa-fw me-3"></i>
                  <span>Analytics</span>
                </a>
                <a
                  href="#h"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-pie fa-fw me-3"></i>
                  <span>SEO</span>
                </a>
                <a
                  href="#h"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-bar fa-fw me-3"></i>
                  <span>Orders</span>
                </a>
                <a
                  href="#hh"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-globe fa-fw me-3"></i>
                  <span>International</span>
                </a>
                <a
                  href="#hg"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-building fa-fw me-3"></i>
                  <span>Partners</span>
                </a>
                <a
                  href="#hg"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-calendar fa-fw me-3"></i>
                  <span>Calendar</span>
                </a>
                <a
                  href="#h"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-users fa-fw me-3"></i>
                  <span>Users</span>
                </a>
                <a
                  href="#hh"
                  className="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i className="fas fa-money-bill fa-fw me-3"></i>
                  <span onClick={Logout}>Log-Out</span>
                </a>
              </div>
            </div>
          </nav>

          <nav
            style={{ border: "2px solid green", padding: "20px" }}
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
          >
            <div className="container-fluid">
              <button
                // style={{ border: "2px solid red" }}
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#hsidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              <a className="navbar-brand" href="#hh">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="25"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>

              <div
                style={{
                  width: "100%",
                  //   border: "2px solid red",
                  textAlign: "center",
                }}
              >
                <Feeds />
              </div>

              <ul className="navbar-nav ms-auto d-flex flex-row">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#h"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#hh">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hg">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hj">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <a className="nav-link me-3 me-lg-0" href="#hk">
                    <i className="fas fa-fill-drip"></i>
                  </a>
                </li> */}

                {/* <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#hk">
                    <i className="fab fa-github"></i>
                  </a>
                </li> */}

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#hk"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="flag-united-kingdom flag m-0"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#hk">
                        <i className="flag-united-kingdom flag"></i>English
                        <i className="fa fa-check text-success ms-2"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hk">
                        <i className="flag-poland flag"></i>Polski
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hk">
                        <i className="flag-china flag"></i>??????
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hk">
                        <i className="flag-japan flag"></i>?????????
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hk">
                        <i className="flag-germany flag"></i>Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#h">
                        <i className="flag-france flag"></i>Fran??ais
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#h">
                        <i className="flag-spain flag"></i>Espa??ol
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#h">
                        <i className="flag-russia flag"></i>??????????????
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#hh">
                        <i className="flag-portugal flag"></i>Portugu??s
                      </a>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                    href="#h"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      className="rounded-circle"
                      height="22"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#h">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#h">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#logout">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search "
                style={{ minWidth: "225px" }}
              />
              {/* --------------------------------------------------------------------------- */}
              {/* <span className="input-group-text border-0">
                  <i className="fas fa-search"></i>
                </span> */}
            </form>
          </nav>
        </header>
      </div>

      <div
        style={{
          border: "2px solid red",
          width: "100%",
          textAlign: "center ",
          display: "flex",
        }}
      >
        <div>dsdsdsdsdsdsdsskkkkkkkkkkkkp</div>
        <main
          style={{
            marginTop: "83px",
            border: "3px solid green",
            width: "70%",
            textAlign: "center",
          }}
        >
          <div className="container-fluid pt-4 pb-4">
            <Midsection />
          </div>
        </main>

        <div
          className="pt-4 pb-4"
          style={{ border: "3px solid black", width: "40%", marginTop: "83px" }}
        >
          <Widgets />
        </div>
      </div>
    </>
  );
};
