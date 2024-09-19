import "./search.css";
import { CgSearch } from "react-icons/cg";
const Search = () => {
  return (
    <div className="formDiv">
      <form className="form">
        <input className="searchInput" type="text" placeholder="search..." />
        <CgSearch className="searchIcon"/>
      </form>
    </div>
  );
};

export default Search;
