import {
  Card,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card className="shadow-none">
      <Card
        color={color}
        className="absolute grid h-12 w-12 place-items-center m-3 rounded-md shadow-none"
      >
        {icon}
      </Card>
      <Card.Body className="pr-4 text-right h-max">
        <Typography type="small" className="font-normal text-foreground">
          {title}
        </Typography>
        <Typography type="h5" color="primary">
          {value}
        </Typography>
      </Card.Body>
      {footer && (
        <Card.Footer className="border-t border-surface p-3 rounded-none">
          {footer}
        </Card.Footer>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "default",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
