import { useLocation, Link } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Breadcrumb,
  Input,
  Menu,
  Avatar,
  Card
} from "@material-tailwind/react";

import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import { Bell, ProfileCircle, Settings , Clock, CreditCard, Barcode } from "iconoir-react";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Card
      className={`rounded-xl transition-all bg-transparent  border-none shadow-none ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      isFullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumb
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                className="opacity-50 transition-all hover:text-info hover:opacity-100 text-sm text-slate-500"
              >
                {layout}
              </Typography>
            </Link>
            <span>/</span>
            <Typography
              className="text-sm "
            >
              {page}
            </Typography>
          </Breadcrumb>
          <Typography className="text-md font-semibold text-primary "         
           >
            {page}
          </Typography>
        </div>
         <div className="flex items-center">
          <Input className="mr-auto md:mr-4 md:w-56 ">
            <Input.Field label="Search" placeholder="Search" className="py-2.5 border-slate-500 "  />
          </Input>
          <IconButton
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Barcode  className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Link to="/auth/sign-in">
            <Button
              className="hidden items-center gap-1 px-4 xl:flex  bg-transparent text-slate-500 border-none hover:bg-slate-200/80 text-xs font-semibold"
            >
              <ProfileCircle className="h-5 w-5 " />
              Sign In
            </Button>
            <IconButton
              
              className="grid xl:hidden"
            >
              <ProfileCircle className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>
          <Menu>
            <Menu.Trigger>
              <IconButton className="bg-transparent text-slate-500 border-none hover:bg-slate-200/80" >
                <Bell className="h-5 w-5 " />
              </IconButton>
            </Menu.Trigger>
            <Menu.Content className="w-max border-0">
              <Menu.Item className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  
                />
                <div>
                  <Typography
                  
                    className="mb-1 text-sm"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                   
                    className="flex items-center gap-1 text-xs  opacity-60"
                  >
                    <Clock className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </Menu.Item>
              <Menu.Item className="flex items-center gap-4">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                 
                />
                <div>
                  <Typography
                   
                    className="mb-1 text-sm"
                  >
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                   
                    className="flex items-center gap-1 text-xs  opacity-60"
                  >
                    <Clock className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </Menu.Item>
              <Menu.Item className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-slate-800 to-slate-900">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    
                    className="mb-1 text-sm"
                  >
                    Payment successfully completed
                  </Typography>
                  <Typography
                   
                    className="flex items-center gap-1 text-xs opacity-60"
                  >
                    <Clock className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </Menu.Item>
            </Menu.Content>
          </Menu>
          <IconButton
           className="bg-transparent text-slate-500 border-none hover:bg-slate-200/80"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Settings className="h-5 w-5 " />
          </IconButton>
        </div> 
      </div>
    </Card>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
