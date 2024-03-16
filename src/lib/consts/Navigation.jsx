import Roles from "../../components/masters/Roles";
import Department from "../../components/masters/Department";

import Issue from "../../components/Manage_Stock/Issue";
import Receive from "../../components/Manage_Stock/Receive";
import Return from "../../components/Manage_Stock/Return";

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
    path: "/",
    label: "Manage",
    content: <Issue />,
  },
  {
    key: "form",
    path: "/",
    label: "Issue",
    content: <Issue />,
  },
  {
    key: "form",
    path: "/",
    label: "Receive",
    content: <Receive />,
  },
  {
    key: "department",
    path: "/",
    label: "Return",
    content: <Return />,
  },
];
export { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_LINKS2 };
