import React from "react";
import SearchAnime from "@/partials/SearchAnime";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="navbar bg-gradient-to-b from-base-300 to-transparent lg:absolute lg:top-0 lg:z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Image src="/logo.jpeg" width={24} height={24} alt="logo" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/manga">MANGA</a>
              </li>
              <li>
                <a href="/tos">Terms Of Service</a>
              </li>
              <li>
                <a href="/dmca">DMCA</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Image src="/logo.jpeg" width={80} height={80} alt="logo" />
            {/* <a
              href="/"
              className={`${nightTokyo.className} btn btn-ghost font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-pink-600 tracking-widest`}
            >
            </a> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/manga">MANGA</a>
            </li>
            <li>
              <a href="/tos">Terms Of Service</a>
            </li>
            <li>
              <a href="/dmca">DMCA</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <div className="w-full lg:w-1/2 mr-1">
            <SearchAnime />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <SearchAnime />
      </div>
    </>
  );
}

export default Header;
