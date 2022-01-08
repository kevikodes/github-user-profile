import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDark } from "../store/themeSlice";
const UserInput = ({ searchRef, handleSearch }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const toggleTheme = () => {
    dispatch(toggleDark());
  };
  return (
    <>
      <div className="header">
        <h4>devfinder</h4>
        <div className="darkMode">
          <p id="modeText">{darkMode ? "LIGHT" : "DARK"}</p>
          <img
            onClick={toggleTheme}
            src={!darkMode ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg"}
            id="dark_btn"
            alt=""
          />
        </div>
      </div>

      <div className="search" id="search_container">
        <img src="./assets/icon-search.svg" alt="" />
        <input
          id="input"
          type="text"
          placeholder="Search Github username..."
          ref={searchRef}
        />
        <div className="search_btn">
          <button id="search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div id="error">
        <p>User not found</p>
      </div>
    </>
  );
};

export default UserInput;
