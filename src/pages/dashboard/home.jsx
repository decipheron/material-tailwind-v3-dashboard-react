import React from "react";
import {
  Card,
  Menu,
  Avatar,
  Tooltip,
  Progress,
  Timeline,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleSolid, Clock, MoreHorizCircle, ArrowUp, Bell, DollarCircle, HomeAlt } from "iconoir-react";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography type="small" className="text-foreground">
                <span className={footer.color}>{footer.value}</span>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                type="small"
                className="flex items-center font-normal text-foreground"
              >
                <Clock className="h-4 w-4" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="col-span-2 shadow-none">
          <Card.Header className="relative h-max py-2 px-2.5">
              <Typography type="h6" color="primary" className="mb-1">
                Projects
              </Typography>
              <Typography
                type="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleSolid className="h-4 w-4 text-success" />
                <strong>30 done</strong> this month
              </Typography>
            <Menu placement="bottom-end">
              <Menu.Trigger as={IconButton} size="sm" variant="ghost" className="!absolute top-0 right-0">
                <MoreHorizCircle className="h-4 w-4" />
              </Menu.Trigger>
              <Menu.Content>
                <Menu.Item>Action</Menu.Item>
                <Menu.Item>Another Action</Menu.Item>
                <Menu.Item>Something else here</Menu.Item>
              </Menu.Content>
            </Menu>
          </Card.Header>
          <Card.Body className="overflow-x-scroll h-max px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Companies", "Members", "Budget", "Completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-surface py-2.5 px-4 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-foreground"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-2.5 px-4 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-surface"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-2">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              type="small"
                              color="primary"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <div className="flex items-center -space-x-2.5">
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={key}>
                              <Tooltip.Trigger >
                                <Avatar
                                  src={img}
                                  alt={name}
                                  size="xs"
                                  className="border border-secondary relative hover:z-10 focus:z-10"
                                />
                              </Tooltip.Trigger>
                              <Tooltip.Content>
                                {name}
                                <Tooltip.Arrow />
                              </Tooltip.Content>
                            </Tooltip>
                          ))}
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            type="small"
                            color="primary"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              type="small"
                              color="primary"
                              className="mb-1 block"
                            >
                              {completion}%
                            </Typography>
                            <Progress size="sm" value={completion}  color={completion === 100 ? "success" : "primary"}>
                              <Progress.Bar />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="h-max px-2.5 py-2">
            <Typography type="h6" color="primary" className="mb-1">
                Projects
              </Typography>
            <Typography
              type="small"
              className="flex items-center gap-1 text-foreground"
            >
              <ArrowUp
                className="h-3.5 w-3.5 stroke-2 text-success"
              />
              <strong>24%</strong> this month
            </Typography>
          </Card.Header>
          <Card.Body className="h-max p-5">
            <Timeline color="secondary" orientation="vertical">
              {ordersOverviewData.map(
                ({ icon: Icon, title, description }, key) => (
                  <Timeline.Item key={key} className="!gap-x-4">
                    <Timeline.Header>
                      {key !== ordersOverviewData.length - 1 && <Timeline.Separator />}
                      <Timeline.Icon className="w-8 h-8">
                        <Icon className="w-4 h-4"/>
                      </Timeline.Icon>
                    </Timeline.Header>
                    <Timeline.Body className="-translate-y-1.5 !pb-4">
                      <Typography as="p" type="small" color="primary" className="font-bold">
                        {title}
                      </Typography>
                      <Typography type="small" className="text-foreground">
                        {description}
                      </Typography>
                    </Timeline.Body>
                  </Timeline.Item>
                )
              )}
            </Timeline>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
