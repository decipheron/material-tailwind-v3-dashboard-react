import React from "react";
import {
  Input,
  IconButton,
  Typography,
  Collapse,
  Card,
  Alert
} from "@material-tailwind/react";


import { WarningCircle} from "iconoir-react";
import {  Menu, Bell ,Settings  ,ProfileCircle} from "iconoir-react";

const LINKS = [
  {
    icon: ProfileCircle,
    title: "Sign in",
    href: "/auth/sign-in",
  },
  {
    icon : Bell,
    href: "#",
  },
 
  {
    icon: Settings,
    href: "#",
  },

];

const YEAR = new Date().getFullYear();
 
const FotterLink = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col  gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, key, title, href}) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 select-none font-sans font-bold text-center transition-all  py-3 rounded-md text-slate-500 hover:bg-slate-400/30  px-4 active:bg-surface-dark-500/20  "
          >
            {Icon && <Icon className="h-4 w-4 text-slate-500"/>}
            {title && title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["primary", "success", "warning", "error"];

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <>
      <Card as="nav" className="mx-auto w-full max-w-screen-xl p-2 bg-transparent border-none shadow-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
          >
          Material Tailwind
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        </div>
        <div className="flex items-center gap-2 ">
       
  <div className="relative  w-[230px] h-10">
    <input
      className="peer w-full h-full   bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 outline-slate-300  focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder="" /><label
      className="flex w-full h-full select-none pointer-events-none  absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Search
    </label>
</div> 
          <NavList />
        </div>
        <IconButton
          size="sm"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-1 grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Card>

    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <Card.Header
          color="transparent"
          className="m-0 p-4"
        >
          <Typography  color="primary" className="font-semibold text-xl">
            Alerts
          </Typography>
        </Card.Header>
        <Card.Body className="flex flex-col gap-4 p-4">
          {alerts.map((color) => (
            <Alert
              key={color}
              open={showAlerts[color]}
              color={color}
              className="p-4 text-white"
            >
              <Alert.Content >
              A simple {color} alert with an <a href="#">example link</a>. Give
              it a click if you like.
              </Alert.Content>
              <Alert.DismissTrigger />
            </Alert>
          ))}
        </Card.Body>
      </Card>
      <Card>
        <Card.Header
          color="transparent"
          className="m-0 p-4"
        >
          <Typography  color="primary" className="font-semibold text-xl">
            Alerts with Icon
          </Typography>
        </Card.Header>
        <Card.Body className="flex flex-col gap-4 p-4">
          {alerts.map((color) => (
            <Alert
              key={color}
              open={showAlertsWithIcon[color]}
              color={color}
              className="p-4 text-white flex items-center"
            >
              <Alert.Icon>
               <WarningCircle />
              </Alert.Icon>
              <Alert.Content>
              A simple {color} alert with an <a href="#">example link</a>. Give
              it a click if you like.
              </Alert.Content>
              <Alert.DismissTrigger />
            </Alert>
          ))}
        </Card.Body>
      </Card>
    </div>

    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-slate-500 text-sm py-4 text-center md:justify-between">
      <Typography>&copy; {YEAR}, made with  by Creative Tim for a better web.</Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {FotterLink.map(({ title, href }) => (
          <li>
            <Typography
              as="a"
              href={href}
              className="hover:text-info"
            >
              {title}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  </>
  );
}

export default Notifications;
