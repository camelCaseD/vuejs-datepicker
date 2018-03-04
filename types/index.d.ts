import Vue from 'vue';

export interface DatepickerComponent extends Vue {
  pageTimestamp: number
  selectedDate: Date
  showDayView: boolean
  showMonthView: boolean
  showYearView: boolean
  calendarHeight: number
}

export const Datepicker: DatepickerComponent;
