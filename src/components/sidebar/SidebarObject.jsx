import { CgHome } from "react-icons/cg";
import { TiLightbulb } from "react-icons/ti";
import { BiMusic, BiNews } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { RiPlayList2Line } from "react-icons/ri";
const SideItems = [
  {
    name: "Home",
    icon: <CgHome />,
  },
  {
    name: "Shorts",
    icon: <BiVideo />,
  },
  {
    name: "Subscription",
    icon: <RiPlayList2Line />,
  },
  {
    name: "Learning",
    icon: <TiLightbulb />,
  },
  {
    name: "Music",
    icon: <BiMusic />,
  },
  {
    name: "News",
    icon: <BiNews />,
  },
];

export default SideItems;
