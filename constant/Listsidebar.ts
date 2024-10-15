import { IoHome } from "react-icons/io5";
import { MdPeople, MdSecurity } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

export const Listsidebar = [
  {
    title: 'Home',
    icon: IoHome, 
    link: '/',
    roles: ['admin', 'user', 'manager'], 
  },
  {
    title: 'Users',
    icon: MdPeople,
    link: '/users',
    roles: ['admin', 'manager'], 
  },
  {
    title: 'Activities',
    icon: FaTasks,
    link: '/activities',
    roles: ['user', 'manager'], 
  },
  {
    title: 'Projects',
    icon: FaTasks,
    link: '/Projects',
    roles: ['user', 'manager'], 
  },
  {
    title: 'Permissions',
    icon: MdSecurity,
    link: '/permissions',
    roles: ['admin'], 
  }
];
