import {
  LayoutDashboardIcon,
  UserPlusIcon,
  TypographyIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  { header: "Food" },
  {
    title: "Menu",
    icon: TypographyIcon,
    to: "/food",
  },
  {
    title: "Register",
    icon: UserPlusIcon,
    to: "/auth/register",
  },
];

export default sidebarItem;
