import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-center py-4">
      
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `navicon-div text-decoration-none ${
              isActive ? "active-link" : " text-black bg-secondary"
            }`
          }
        >
          <div className=" border rounded m-3 mx-4 p-2 text-center bg-secondary bg-opacity-10">
        <svg
          width="1rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
        </svg>
        <br />
          About
          </div>
        </NavLink>
     

      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `navicon-div text-decoration-none ${
            isActive ? "active-link" : " text-black bg-secondary"
          }`
        }
      >
        <div className="border rounded m-3 mx-4 p-2 text-center bg-secondary bg-opacity-10">
          <svg
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
          </svg>
          Resume
        </div>
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `text-decoration-none ${
            isActive ? "active-link" : " text-black bg-secondary"
          }`
        }
      >
        <div className="border rounded m-4 p-2 text-center bg-secondary bg-opacity-10">
          <svg
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
          </svg>
          Works
        </div>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `text-decoration-none ${
            isActive ? "active-link" : " text-black bg-secondary"
          }`
        }
      >
        <div className="border rounded m-4 p-2 text-center bg-secondary bg-opacity-10">
          <svg
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" />
          </svg>
          <br />
          Bolg
        </div>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-decoration-none ${
            isActive ? "active-link" : " text-black bg-secondary"
          }`
        }
      >
        <div className="border rounded m-4 p-2 text-center bg-secondary bg-opacity-10">
          <svg
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
          </svg>
          Contact
        </div>
      </NavLink>
    </div>
  );
}
