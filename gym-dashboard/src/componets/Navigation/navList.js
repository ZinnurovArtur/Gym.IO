import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import Person from "@mui/icons-material/Person";

import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import BorderColor from "@mui/icons-material/BorderColor";
import Search from "@mui/icons-material/Search";

const navbarList = [
  {
    icon: Search,
    desc: "Search",
    secondDesc: "",
    path: "",
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: "Dashboard",
    secondDesc: "",
    path: "/dashboard",
    badge: 0,
    subList: [],
  },
 
  {
    icon: Analytics,
    desc: "Body analytics",
    secondDesc: "",
    path: "body",
    badge: 0,
    subList: [],
  },
  {
    icon: FolderOpen,
    desc: "Exsercise list",
    secondDesc: "",
    path: "excersicelist",
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    desc: "Edit workout",
    secondDesc: "",
    path: "editworkout",
    badge: 0,
    subList: [],
  },
  {
    icon: Person,
    desc: "User",
    secondDesc: "",
    path: "user",
    badge: 0,
    subList: [],
  },
];

export default navbarList;
