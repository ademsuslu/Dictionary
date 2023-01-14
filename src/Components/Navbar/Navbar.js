import React, { useState } from "react";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { Slant as Hamburger } from "hamburger-react";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="hamburger">
            <div className="hamburgerIcon">
              <Hamburger
                color="black"
                easing="ease"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            {isOpen && (
              <ul className="List">
                <li className="ListItem">
                  <Link href="/">Home</Link>
                </li>
                <li className="ListItem">
                  <Link href="/About">About Us</Link>
                </li>
                <li className="ListItem">
                  <Link href="/Telegram">Telegram</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="col">
          <h1 className="Head">Open Didionny 1.0</h1>
        </div>
        <div className="col">
          <a
            href="https://t.me/opendictionary1/3"
            target="_blank"
            className="create"
          >
            <BsPlus className="createIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
