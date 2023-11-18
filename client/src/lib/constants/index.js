import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiCalendar,
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
  {
    key: "Reminders",
    label: "Reminders",
    path: "reminders",
    icon: <HiCalendar />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/dashboard/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/dashboard/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
