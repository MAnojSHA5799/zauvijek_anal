declare module 'chartjs-chart-box-and-violin-plot' {
  import { ChartType, ChartComponentLike } from 'chart.js';

  export const BoxPlotController: ChartComponentLike;
  export const ViolinPlotController: ChartComponentLike;
  export const BoxPlot: ChartType;
  export const ViolinPlot: ChartType;
}
