import { Search, Profile } from "../exporter/Cexporter";
import { CgMenu } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ({ setSideVisible }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        borderBottom: "1px solid",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <CgMenu
          fontSize={30}
          cursor="pointer"
          onClick={() => setSideVisible((prev) => (prev ? false : true))}
        />
        <FaYoutube fontSize={40} color="red" cursor="pointer" onClick={()=><Link to='/' />} />

        <h2>Youtube</h2>
      </div>
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;
