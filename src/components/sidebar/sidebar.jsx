import "./sidebar.css";
import SideItems from "./SidebarObject";

const Sidebar = ({ sideVisible }) => {
  return (
    <div className={`sideDiv ${sideVisible === true ? "" : "smallSideDiv"}`}>
      <ul>
        {SideItems.map((item, i) => (
          <li className="sideLi" key={i}>
            {item.icon}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
