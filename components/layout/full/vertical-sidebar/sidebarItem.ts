import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  MoodHappyIcon,
  UserPlusIcon,
  TypographyIcon,
} from "vue-tabler-icons";
/*{
    title: "Shadow",
    icon: CopyIcon,
    to: "/ui/shadow",
  },
  { header: "auth" },
  {
    title: "Login",
    icon: LoginIcon,
    to: "/auth/login",
  },*/
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
  { header: "Extra" },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
  },
  {
    title: "Sample Page",
    icon: ApertureIcon,
    to: "/food",
  },
];

export default sidebarItem;
