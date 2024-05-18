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

import { HomeAlt , ProfileCircle ,PenTablet ,ChatBubbleWarning , LogIn , DataTransferDown } from "iconoir-react";

import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { Link,  } from "react-router-dom";


const Links = [
  {
    icon: HomeAlt,
    title: "Dashboard",
    href: "../../pages/dashboard/home",
   
  },
  {
    icon: ProfileCircle,
    title: "Profile",
    href: "../../pages/dashboard/profile",
  },
  {
    icon: PenTablet,
    title: "Tables",
    href: "../../pages/dashboard/tables",
  },
  {
    icon: ChatBubbleWarning,
    title: "Notifications",
    href: "../../pages/dashboard/notifications",
  },
  
];
 
// import file from "../../pages/dashboard/profile"


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
    <Card className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } shadow-none fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 transition-transform duration-300 xl:translate-x-0`}>
       <Card.Header className="mx-3 mb-1 mt-3 flex h-max items-center gap-3">
        <Avatar size="sm" src="https://mtr-v3-site.vercel.app/logo.png" alt="brand" />
        <Typography className="font-bold ">
          Material Tailwind
        </Typography>
      </Card.Header> 
      <Card.Body className="p-3">
        <List>
          {/* problem is here */}
           {/* {routes.map(({ layout, title, pages }, key) => (
            <>
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                key={title}
                  variant="small"
                  color={sidenavType === "dark" ? "white" : ""}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path ,key}) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "info"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      isFullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}</>
          ))}   */}
          {/* problem is here */}
           {Links.map(({ icon: Icon, title, href }) => (
            <List.Item key={title} href={href} className="cursor-pointer py-4 font-semibold flex items-center hover:bg-slate-200 px-3 rounded-md ">
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>
           {title}
            </List.Item>
          ))}
          <hr className="-mx-3 my-3 border-secondary" />
          <List.Item onClick={() => setIsOpen((cur) => !cur)} className="cursor-pointer font-semibold hover:bg-slate-200 p-4">
                         Auth Pages
             </List.Item>
          <Collapse open={isOpen}>
            <List>
              <List.Item className="cursor-pointer font-semibold hover:bg-slate-200 p-4">
                <List.ItemStart>
                  <LogIn className="h-[18px] w-[18px]" />
                </List.ItemStart>
                <Link>Sign in</Link>
              </List.Item>
              <List.Item className="cursor-pointer font-semibold hover:bg-slate-200 p-4">
                <List.ItemStart>
                  <DataTransferDown className="h-[18px] w-[18px]" />
                </List.ItemStart>
               <Link>Sign Up</Link>
              </List.Item>
            </List>
          </Collapse>
         </List>
        
        </Card.Body>
      
      {/* // <Card.Footer className="mt-8">
      //   <Card color="primary">
      //     <Card.Header className="m-3">
      //       <SelectFace3d className="h-10 w-10 text-primary-foreground" />
      //     </Card.Header>
      //     <Card.Body>
      //       <Typography type="h6" color="secondary" className="mb-1">
      //         Upgrade to PRO
      //       </Typography>
      //       <Typography type="small" className="text-secondary-dark">
      //         Upgrade to Material Tailwind PRO and get even more components,
      //         plugins, advanced features and premium.
      //       </Typography>
      //     </Card.Body>
      //     <Card.Footer>
      //       <Button size="sm" as="a" href="#" color="secondary">
      //         Upgrade Now
      //       </Button>
      //     </Card.Footer>
      //   </Card>
      // </Card.Footer>  */}
    </Card>
  );
}

export default Sidenav;

