import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "ManageTask",
    label: "Manage Task",
    path: "manage-task",
    icon: <HiOutlineCube />,
  },
  {
    key: "Categories",
    label: "Categories",
    path: "categories",
    icon: <HiOutlineViewGrid />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Help & Support",
    path: "help-and-support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
