import React, {useState} from "react";
import "./MyWorksPage.css";
import SmallToolbar from "../Toolbar/SmallToolbar";
import SearchMyWorks from "./SearchMyWorks";

const MyWorksPage = props => {
  const [search,setSearch] = useState('');
  const workSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  return(
    <div style={{height: '100%'}}>
      <SmallToolbar/>
      <div className="SearchBar">
        <SearchMyWorks changed={(event)=>workSearchHandler(event)} name={search}/>
        <p className="Searched">
          {search}
        </p>
      </div>
    </div>
  )
};

export default MyWorksPage;