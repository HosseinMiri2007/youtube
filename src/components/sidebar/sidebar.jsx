import "./sidebar.css";
import SideItems from "./SidebarObject";

const Sidebar = ({ sideVisible, setCategory }) => {
  return (
    <div className={`sideDiv ${sideVisible === true ? "" : "smallSideDiv"}`}>
      <ul>
        {SideItems.map((item, i) => (
          <li
            className={`sideLi ${item[i] === "activeLi"}`}
            key={i}
            onClick={() => setCategory(() => item.id)}
          >
            {item.icon}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
