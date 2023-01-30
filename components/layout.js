import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "./icons/Group576.png";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Card, Collapse } from "reactstrap";

export default function SideBar({ children }) {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const router = useRouter();
    const menuItems = [
        {
          href: '/home',
          title: 'Home',
          icon: 'bi-house-door-fill'
        },
        {
          href: '/class',
          title: 'Class',
          icon: 'bi-grid-fill'
        },
        {
          href: '/notification',
          title: 'Notification',
          icon: 'bi-bell-fill'
        },
        {
          href: '/',
          title: 'Logout',
          icon: 'bi-box-arrow-left'
        },
      ];
  return (
    <div className="pos-f-t">
        <Collapse isOpen={collapseOpen}>
            <div className="bg-dark p-5">
                <h4 className="text-white">Collapsed content</h4>
            </div>
        </Collapse>
        <div className="container-fluid bg-white col">
            <div className="row">
                <div className="col bg-272727">
                    <nav className="navbar navbar-expand-md navbar-dark bg-272727">
                        <a className="navbar-brand bg-272727" href={router.asPath}>
                            \{router.asPath}
                        </a>
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
                    </nav>
                </div>
                <div className="row">
                    <div className="col-auto min-vh-100 bg-3D3D3D">
                        {menuItems.map(({ href, title, icon }) => (
                            <li key={title} className="pd-0">
                                <Link href={href}>
                                    <a
                                        className={`nav-link px-2 text-white
                                        ${router.asPath === href && 'bg-custom-color-2 text-white border border-light border-3 rounded-2'}` }
                                    >
                                    <i className={icon} />
                                    <span className="ms-2 d-none d-sm-inline">{title}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                </div>
                    <div className="col">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}