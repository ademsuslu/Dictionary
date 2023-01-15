import React, { useState } from "react";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { Slant as Hamburger } from "hamburger-react";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
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
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="https://t.me/opendictionary1"
                  >
                    Telegram
                  </a>
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
            href="https://t.me/opendictionary1/4"
            target="_blank"
            rel="noreferrer"
            className="create"
          >
            <BsPlus className="createIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
