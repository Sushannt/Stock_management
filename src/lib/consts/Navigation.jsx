// import Roles from "../../components/masters/Roles";
import Roles from "../../components/masters/Roles";
const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "user",
    path: "/",
    label: "Role",
    content: <Roles />,
  },
];

const DASHBOARD_SIDEBAR_LINKS2 = [
  {
    key: "form",
    path: "/role",
    label: "Data Entry",
    content: <Roles />,
  },
];
export { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_LINKS2 };
