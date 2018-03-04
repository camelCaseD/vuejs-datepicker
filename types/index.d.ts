import Vue from 'vue';

interface Datepicker extends Vue {
  pageTimestamp: number
  selectedDate: Date
  showDayView: boolean
  showMonthView: boolean
  showYearView: boolean
  calendarHeight: number
}

export default Datepicker;
