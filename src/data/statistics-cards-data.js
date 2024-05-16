import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "primary",
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "$53k",
    footer: {
      color: "text-success",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "primary",
    icon: UsersIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-success",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "primary",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-error",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "primary",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-success",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
