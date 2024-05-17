import React from "react";
import {
  Typography,
  Alert,
  Card,
  
} from "@material-tailwind/react";


import { WarningCircle, Xmark} from "iconoir-react";

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

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <Card.Header
          color="transparent"
          // floated={false}
          // shadow={false}
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
          // floated={false}
          // shadow={false}
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
  );
}

export default Notifications;
