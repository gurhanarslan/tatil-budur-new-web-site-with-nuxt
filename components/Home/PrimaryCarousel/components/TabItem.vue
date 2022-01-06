<template>
  <div class="row">
    <CityHotelThemeSearch @input="(e) => (search.location = e)" />
    <DateRange @input="(e) => search.dateRange = e" />
    <NumberofPerson @input="(e) => (search.numberofPerson = e)" />
    <div class="col-md-2 col-12 items">
      <div>
        <button class="btn search primary w-100">Otel Ara</button>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import MethodsMixin from './TabItemApı'
import CityHotelThemeSearch from './CityHotelThemeSearch.vue'
import NumberofPerson from './NumberOfPerson.vue'
import DateRange from './AccomidationDate.vue'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
    clickOutsideSelect: vClickOutside.directive,
  },
  components: {
    CityHotelThemeSearch,
    NumberofPerson,
    DateRange,
  },
  mixins: [MethodsMixin],
  data() {
    return {
      theText: '',
      search: {
        numberofPerson: { value: '1 Yetişkin', parent: 1, children: [] },
        dateRange: '',
        location: { id: -1, value: '' },
      },
    }
  },
}
</script>