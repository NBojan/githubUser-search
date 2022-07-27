import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ColumnChart = ({data}) => {
    const chartConfigs = {
        type: "column3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Most Popular",
            xAxisName: "Repos",
            yAxisName: "Stars",
            xAxisNameFontSize: "16px",
            yAxisNameFontSize: "16px",
            theme: "gammel"
          },
          data
        }
      };

    return (<ReactFC {...chartConfigs} className="chart chartRight" />);
}
 
export default ColumnChart;