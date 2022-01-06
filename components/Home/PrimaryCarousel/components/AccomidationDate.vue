<template>
  <div v-click-outside="onClickOutside" class="col-md-3 col-12 items">
    <TextField
      v-model="dateRange"
      search
      suggestion
      read-only
      @focus="ShowDateRange = true"
      icon="calender.svg"
      label="Konaklama Tarihi"
    >
      <template #suggestion>
        <div v-if="ShowDateRange" class="suggestion-bar date-range">
          <div class="input-ranges">
            <span class="triangle"></span>
            <div class="start-date">
              <img
                src="/images/icons/calender.svg"
                alt="calender"
                class="icon"
              />
              <input v-model="start" readonly class="start-range" type="text" />
            </div>
            <div class="end-date">
              <img
                src="/images/icons/calender.svg"
                alt="calender"
                class="icon"
              />
              <input readonly v-model="end" class="end-range" type="text" />
              <img src="/images/icons/clear.svg" alt="calender" class="clear" />
            </div>
          </div>
          <div class="date-range-content">
            <DatePicker
              :value="componentValue"
              @input="setDate"
              :specialDays="specialDays"
            />
            <div class="range-footer">
              <ul>
                <li>
                  <span class="left-side">1 Ocak</span>
                  <span class="right-side">- Yılbaşı Gecesi</span>
                </li>
                <li>
                  <span class="left-side">17 - 18 Ocak</span>
                  <span class="right-side">- Tıp Bayramı</span>
                </li>
              </ul>
              <button @click="ShowDateRange = false">Uygula</button>
            </div>
          </div>
        </div>
      </template>
    </TextField>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import TextField from '@/components/GlobalComponents/TextField.vue'
import DatePicker from '@/components/GlobalComponents/DatePicker.vue'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    TextField,
    DatePicker,
  },
  data() {
    return {
      ShowDateRange: false,
      dateRange: '',
      specialDays: [
        { dateString: '1 Ocak', title: 'Yılbaşı Gecesi', date: ['2022-01-01'] },
        {
          dateString: '17 - 18 Ocak',
          title: 'Tıp Bayramı',
          date: ['2022-01-17', '2022-01-18'],
        },
      ],
      start: '',
      end: '',
      componentValue: [],
    }
  },
  methods: {
    onClickOutside() {
      this.ShowDateRange = false
    },
    setDate(start, end, compstart, compend) {
      this.componentValue = [compstart, compend]
      this.dateRange = `${start} - ${end}`
      this.$emit('input', this.dateRange)
      this.start = start
      this.end = end
    },
  },
}
</script>