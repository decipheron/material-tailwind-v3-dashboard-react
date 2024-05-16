import {
  Card,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

export function StatisticsChart({ color, chart, title, description, footer }) {
  return (
    <Card className="shadow-none">
      <Card color={color} className="shadow-none border-none">
        <Chart {...chart} />
      </Card>
      <Card.Body className="h-max pt-0">
        <Typography color="primary" className="font-bold">
          {title}
        </Typography>
        <Typography type="small" className="font-normal text-foreground">
          {description}
        </Typography>
      </Card.Body>
      {footer && (
        <Card.Footer className="rounded-none pt-3 border-t border-surface">
          {footer}
        </Card.Footer>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "default",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
