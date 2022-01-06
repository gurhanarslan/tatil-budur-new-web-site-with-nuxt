<template>
  <date-picker
    :value="value"
    @input="setInputDate"
    inline
    @panel-change="setSpecialDays"
    @calendar-change="setSpecialDays"
    type="date"
    range
    value-type="format"
    :lang="lang"
    :disabled-date="notBeforeToday"
    placeholder="Select date range"
  ></date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/tr'
import { StringMonthAndDay } from '@/plugins/DateFormatter'
export default {
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
      },
    }
  },
  props: {
    specialDays: {
      default: () => [],
    },
    value: {
      default: () => [],
    },
  },
  components: {
    DatePicker,
  },
  methods: {
    setInputDate(data) {
      this.setActiveRange()
      this.setSpecialDays()
      const [start, end] = data
      this.$emit(
        'input',
        StringMonthAndDay(start),
        StringMonthAndDay(end),
        start,
        end
      )
    },
    setActiveRange() {
      const range = document.getElementsByClassName('cell active')
      setTimeout(() => {
        for (let i = 0; i < range.length; i++) {
          if (i === 0) {
            range[i].classList.add('first-in-active')
            const span = document.createElement('span')
            range[i].appendChild(span)
          } else if (i === 1) {
            range[i].classList.add('last-in-active')
            const span = document.createElement('span')
            range[i].appendChild(span)
          }
        }
      }, 50)
    },
    setClearCalender() {
      const cell = document.getElementsByClassName('cell')
      setTimeout(() => {
        for (let i = 0; i < cell.length; i++) {
          const el = cell[i]
          el.classList.remove('special-day')
        }
      }, 50)
    },
    setSpecialDays() {
      this.setClearCalender()
      const cell = document.getElementsByClassName('cell')
      setTimeout(() => {
        for (let i = 0; i < cell.length; i++) {
          const el = cell[i]
          const title = el.getAttribute('title') // 2022-01-01
          if (
            this.specialDays
              .map(({ date }) => date.includes(title))
              .includes(true)
          ) {
            el.classList.add('special-day')
          }
        }
      }, 50)
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0))
    },
  },
  mounted() {
    this.setSpecialDays()
    const btn = document.getElementsByClassName('mx-btn')
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', this.setSpecialDays, false)
    }
  },
}
</script>

<style lang="scss">
@import '~/static/scss/components/DatePicker.scss';
</style>