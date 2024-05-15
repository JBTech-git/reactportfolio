import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-center py-4">
      <div className="border rounded m-4 p-2 text-center">
      <svg width='1rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
      <NavLink
        to="/"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        Home
      </NavLink>
      </div>
      <div className="border rounded m-4 p-2 text-center">
      <NavLink
        to="/About"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        About
      </NavLink>
      </div>
      <div>
      <NavLink
        to="/resume"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        Resume
      </NavLink>
      </div>
      <div>
      <NavLink
        to="/portfolio"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        Portfolio
      </NavLink>
      </div>
      <div>
      <NavLink
        to="/blog"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        Bolg
      </NavLink>
      </div>
      <div>
      <NavLink
        to="/contact"
        className={({ isActive}) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        `${isActive ? 'text-orange-700' : 'text-orange-700'}`
        }
      >
        Contact
      </NavLink>
      </div>
    </div>
  );
}
