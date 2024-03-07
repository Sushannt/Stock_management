import Roles from "../../components/masters/Roles";
import Department from "../../components/masters/Department";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "user",
    path: "/",
    label: "Role",
    content: <Roles />,
  },
  {
    key: "department",
    path: "/",
    label: "Department",
    content: <Department />,
  },
];

const DASHBOARD_SIDEBAR_LINKS2 = [
  {
    key: "form",
    path: "/role",
    label: "Data Entry",
    content: <Roles />,
  },
  {
    key: "department",
    path: "/",
    label: "Department",
    content: <Department />,
  },
];
export { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_LINKS2 };
