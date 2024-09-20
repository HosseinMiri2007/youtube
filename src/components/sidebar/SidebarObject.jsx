import { CgHome } from "react-icons/cg";
import { TiLightbulb } from "react-icons/ti";
import { BiMusic, BiNews } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
const SideItems = [
  {
    name: "Home",
    icon: <CgHome />,
    id: 0,
  },
  {
    name: "Music",
    icon: <BiMusic />,
    id: 10,
  },
  {
    name: "News",
    icon: <BiNews />,
    id: 25,
  },
  {
    name: "Gaming",
    icon: <FaGamepad />,
    id: 20,
  },
];

export default SideItems;
