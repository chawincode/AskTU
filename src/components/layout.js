import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Collapse } from "reactstrap";

export default function SideBar({ children }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const router = useRouter();
  const menuItems = [
    {
      href: "/home",
      title: "Home",
      icon: "bi-house-door-fill",
    },
    {
      href: "/class",
      title: "Class",
      icon: "bi-grid-fill",
    },
    {
      href: "/notification",
      title: "Notification",
      icon: "bi-bell-fill",
    },
    {
      href: "/",
      title: "Logout",
      icon: "bi-box-arrow-left",
    },
  ];
  return (
    <div className="container-fluid bg-white p-0">
      <div className="row p-0 ms-0 me-0">
        <div className="col bg-272727 p-0">
          <nav className="navbar navbar-expand navbar-dark bg-272727 pe-2 ps-2 d-none d-md-block">
            <a className="navbar-brand bg-272727" href={router.asPath}>
              \{router.asPath}
            </a>
            <button
              className="navbar-toggler border rounded-circle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e) => {
                e.preventDefault();
                setCollapseOpen(!collapseOpen);
              }}
            >
              <span>P</span>
            </button>
          </nav>
          <nav className="navbar navbar-expand d-block d-md-none navbar-dark bg-272727 pe-2 ps-2 justify-content-center">
            <a className="navbar-brand bg-272727" href={router.asPath}>
              \{router.asPath}
            </a>
          </nav>
          <nav className="navbar navbar-expand-md navbar-dark bg-272727 pe-2 ps-2">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e) => {
                e.preventDefault();
                setCollapseOpen(!collapseOpen);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="navbar-toggler border rounded-circle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e) => {
                e.preventDefault();
                setCollapseOpen(!collapseOpen);
              }}
            >
              <span>P</span>
            </button>
          </nav>
        </div>
        <div className="container-md row p-0 ms-0 me-0">
          <div className="col-auto d-none d-md-inline min-vh-100 bg-3D3D3D p-0">
            <div className="d1">
              {menuItems.map(({ href, title, icon }) => (
                <li key={title} className="p-0">
                  <Link href={href}>
                    <a
                      className={`nav-link px-2 text-white
                                      ${
                                        router.asPath === href &&
                                        "bg-custom-color-2 text-white"
                                      }`}
                    >
                      <i className={icon} />
                      <span className="ms-2 d-sm-inline">{title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <Collapse
            isOpen={collapseOpen}
            className="col-auto d-md-none min-vh-100 bg-3D3D3D p-0"
          >
            <div className="d1">
              {menuItems.map(({ href, title, icon }) => (
                <li key={title} className="p-0">
                  <Link href={href}>
                    <a
                      className={`nav-link px-2 text-white
                                      ${
                                        router.asPath === href &&
                                        "bg-custom-color-2 text-white"
                                      }`}
                    >
                      <i className={icon} />
                      <span className="ms-2 d-sm-inline">{title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </div>
          </Collapse>
          <div className="col p-0">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
