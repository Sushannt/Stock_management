import Roles from "../../components/masters/Roles";
import Department from "../../components/masters/Department";

import Issue from "../../components/Manage_Stock/Issue";
import Receive from "../../components/Manage_Stock/Receive";
import Return from "../../components/Manage_Stock/Return";

export const MasterMenu = [
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

export const ManageStockMenu = [
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
