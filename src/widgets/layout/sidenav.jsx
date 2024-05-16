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
import {
  Archive,
  EmptyPage,
  Folder,
  LogOut,
  Mail,
  MoreHorizCircle,
  NavArrowRight,
  Pin,
  SelectFace3d,
  SendDiagonal,
  Trash,
  UserXmark,
} from "iconoir-react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { Link, NavLink } from "react-router-dom";

const Links = [
  {
    icon: Mail,
    title: "Inbox",
    href: "#",
    badge: 14,
  },
  {
    icon: SendDiagonal,
    title: "Sent",
    href: "#",
  },
  {
    icon: EmptyPage,
    title: "Drafts",
    href: "#",
  },
  {
    icon: Pin,
    title: "Pins",
    href: "#",
  },
  {
    icon: Archive,
    title: "Archive",
    href: "#",
  },
  {
    icon: Trash,
    title: "Trash",
    href: "#",
  },
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
    <Card className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } shadow-none fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 transition-transform duration-300 xl:translate-x-0`}>
       <Card.Header className="mx-3 mb-1 mt-3 flex h-max items-center gap-3">
        <Avatar size="sm" src="https://mtr-v3-site.vercel.app/logo.png" alt="brand" />
        <Typography className="font-bold">
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
           {Links.map(({ icon: Icon, title, href, badge }) => (
            <List.Item key={title} href={href}>
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>
              {title}
              {badge && (
                <List.ItemEnd>
                  <Chip size="sm" variant="ghost">
                    <Chip.Label>{badge}</Chip.Label>
                  </Chip>
                </List.ItemEnd>
              )}
            </List.Item>
          ))}
          <hr className="-mx-3 my-3 border-secondary" />
          <List.Item onClick={() => setIsOpen((cur) => !cur)}>
            <List.ItemStart>
              <MoreHorizCircle className="h-[18px] w-[18px]" />
            </List.ItemStart>
            More
            <List.ItemEnd>
              <NavArrowRight
                className={`h-4 w-4 ${isOpen ? "rotate-90" : ""}`}
              />
            </List.ItemEnd>
          </List.Item>
          <Collapse open={isOpen}>
            <List>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Spam
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <UserXmark className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Blocked
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Important
              </List.Item>
            </List>
          </Collapse>
          <hr className="-mx-3 my-3 border-secondary" />
          <List.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error">
            <List.ItemStart>
              <LogOut className="h-[18px] w-[18px]" />
            </List.ItemStart>
            Logout
          </List.Item> 
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

