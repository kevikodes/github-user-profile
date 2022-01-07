import React from "react";
import UserContent from "./UserContent";
import UserInput from "./UserInput";

const Container = ({ handleSearch, user, searchRef }) => {
  return (
    <div className="container">
      <UserInput searchRef={searchRef} handleSearch={handleSearch} />
      <UserContent user={user} />
    </div>
  );
};

export default Container;
