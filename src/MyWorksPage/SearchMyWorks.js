import React from "react";
// import "./SearchMyWorks.css";

const SearchMyWorks = props => {
  return (
    <input type="text" onChange={props.changed} value={props.name}/>
  )
};

export default SearchMyWorks;