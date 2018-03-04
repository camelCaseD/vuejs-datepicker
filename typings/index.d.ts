import Vue from 'vue';

export default interface Datepicker extends Vue {
  pageTimestamp: number
  selectedDate: Date
  showDayView: boolean
  showMonthView: boolean
  showYearView: boolean
  calendarHeight: number = 0
}
