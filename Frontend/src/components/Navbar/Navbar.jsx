import React, { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const searchIcon = document.querySelector("#searchIcon");
    const navOpenBtn = document.querySelector(".navOpenBtn");
    const navCloseBtn = document.querySelector(".navCloseBtn");

    const dropdownBtn = document.getElementById("profile-dropdown");

    const toggleDropdown = () => {
      const dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("show");
    };

    dropdownBtn?.addEventListener("click", toggleDropdown);

    const handleWindowClick = (event) => {
      const dropdownContent = document.querySelector(".dropdown-content");
      if (
        event.target !== dropdownContent &&
        !event.target.closest(".nav-ele")
      ) {
        dropdownContent.classList.remove("show");
      }
    };

    window.addEventListener("click", handleWindowClick);

    const handleSearch = () => {
      nav.classList.toggle("openSearch");
      nav.classList.remove("openNav");

      const searchBar = document.getElementById("pname");
      if (searchBar) searchBar.value = "";

      if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
      }

      searchIcon.classList.replace("uil-times", "uil-search");

      const plantCardsContainer = document.getElementById(
        "plantCardsContainer",
      );
      if (plantCardsContainer) {
        plantCardsContainer.innerHTML = "";
      }

      const wbd = document.getElementById("wbd");
      if (wbd) wbd.style.display = "block";
    };

    searchIcon?.addEventListener("click", handleSearch);

    const openNav = () => {
      nav.classList.add("openNav");
      nav.classList.remove("openSearch");
      searchIcon.classList.replace("uil-times", "uil-search");
    };

    const closeNav = () => {
      nav.classList.remove("openNav");
    };

    navOpenBtn?.addEventListener("click", openNav);
    navCloseBtn?.addEventListener("click", closeNav);

    // CLEANUP (important)
    return () => {
      dropdownBtn?.removeEventListener("click", toggleDropdown);
      window.removeEventListener("click", handleWindowClick);
      searchIcon?.removeEventListener("click", handleSearch);
      navOpenBtn?.removeEventListener("click", openNav);
      navCloseBtn?.removeEventListener("click", closeNav);
    };
  }, []);

  return (
    <nav className="nav" id="nav">
      <i className="uil uil-bars navOpenBtn"></i>

      <a href="/" className="logo">
        <b>PlantsBuy</b>
      </a>

      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn"></i>

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/testimony">Testimonials</a>
        </li>
        <li>
          <a href="/ourteam">Our Team</a>
        </li>
        <li>
          <a href="/terms">Terms and Conditions</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>

        <li className="nav-ele dropdown">
          <a href="#" id="profile-dropdown">
            <i className="ri-user-line"></i>
          </a>

          <div className="dropdown-content">
            <a href="/registration">Sign In</a>
          </div>
        </li>
      </ul>

      <i className="uil uil-search search-icon" id="searchIcon"></i>

      <div className="search-box">
        <input type="text" id="pname" placeholder="Search here..." />
      </div>
    </nav>
  );
}
