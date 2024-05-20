import * as React from "react";
import {
  Card,
  List,
  Typography,
  Chip,
  Collapse,
  Button,
  Avatar,
} from "@material-tailwind/react";

import { HomeAlt , ProfileCircle ,PenTablet ,ChatBubbleWarning , LogIn , DataTransferDown, Activity } from "iconoir-react";

import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { Link,  } from "react-router-dom";


const Links = [
  {
    icon: HomeAlt,
    title: "Dashboard",
    href: "/dashboard/home",
   
  },
  {
    icon: ProfileCircle,
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    icon: PenTablet,
    title: "Tables",
    href: "/dashboard/tables",
  },
  {
    icon: ChatBubbleWarning,
    title: "Notifications",
    href: "/dashboard/notifications",
  },

  {
    icon : LogIn,
    title: "Sign in",
    href : "/auth/sign-in"
  },
  {
    icon : DataTransferDown,
    title: "Sign up",
    href : "/auth/sign-up"
  }
  
];
 



export function Sidenav({ brandName, routes }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
   const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <Card className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"} shadow-none fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 transition-transform duration-300 xl:translate-x-0`}>
       <Card.Header className="mx-3 mb-1 mt-3 flex h-max items-center gap-3">
        <Avatar size="sm" src="https://mtr-v3-site.vercel.app/logo.png" alt="brand" />
        <Typography className="font-bold ">
          Material Tailwind
        </Typography>
      </Card.Header> 
      <Card.Body className="p-3">
         <List>
           {Links.map(({ icon: Icon, title, href }) => (
            <Link to={href}>
            <List.Item key={title} className="cursor-pointer py-4 font-semibold flex items-center hover:bg-slate-200 px-3 rounded-md ">
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>
           {title}
            </List.Item>
            </Link>
          ))}
         </List> 
        </Card.Body>
    </Card>
  );
}

export default Sidenav;

