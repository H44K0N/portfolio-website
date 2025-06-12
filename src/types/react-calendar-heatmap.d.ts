declare module 'react-calendar-heatmap' {
  import { ComponentType } from 'react';

  interface Value {
    date: string;
    count?: number;
  }

  interface CalendarHeatmapProps {
    startDate: Date | string;
    endDate: Date | string;
    values: Value[];
    className?: string;
    gutterSize?: number;
    showWeekdayLabels?: boolean;
    // Du kan utvide dette ved behov
  }

  const CalendarHeatmap: ComponentType<CalendarHeatmapProps>;
  export default CalendarHeatmap;
}
