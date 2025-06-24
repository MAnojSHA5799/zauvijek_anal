declare module 'fishbone-chart' {
  import * as React from 'react';

  export interface FishboneChartProps {
    data: {
      [effect: string]: {
        [category: string]: string[];
      };
    };
    cols?: string;
  }

  const FishboneChart: React.ComponentType<FishboneChartProps>;
  export default FishboneChart;
}
