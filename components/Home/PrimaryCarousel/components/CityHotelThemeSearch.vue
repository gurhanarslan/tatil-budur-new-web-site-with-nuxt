<template>
  <div v-click-outside="onClickOutside" class="col-md-4 col-12 items">
    <TextField
      icon="location-pin.svg"
      search
      suggestion
      label="Otel, Şehir, Bölge veya Tema Adı"
      :value="location.value"
      @focus="setFocusSearchLocation"
      @input="setSearchLocation"
    >
      <template #suggestion>
        <div v-if="ShowAutocomplete" class="suggestion-bar">
          <div class="bar-input-group">
            <input
              ref="searchLocation"
              placeholder="Otel, Şehir, Bölge veya Tema Adı"
              :value="location.value"
              type="text"
              class="bar-input"
              @input="(e) => setSearchLocation(e.target.value)"
            />
            <span
              class="bar-clear"
              @click="
                location = { id: -1, value: '' }
                setClearAutocomplete()
              "
            >
              <img src="/images/icons/clear.svg" alt="clear" />
            </span>
          </div>
          <div v-if="AutocompleteIsLoading" class="loading">Yükleniyor...</div>
          <div v-else-if="Object.entries(ResultAutocomplete).length === 0 && location.value !== ''" class="loading">Sonuç Bulunamadı.</div>
          <div
            v-else-if="!AutocompleteIsLoading && Object.entries(ResultAutocomplete).length !== 0"
            class="bar-suggestion"
          >
            <div v-for="(arr, key) in ResultAutocomplete" :key="key">
              <h6 class="title">{{ key }}</h6>
              <div
                v-for="(item, i) in arr"
                :key="key + '-' + i"
                class="suggestion-results"
                @click="setClickAutocomplete(item.id, item.value)"
              >
                <img :src="`/images/icons/${item.type === 'region' ? 'pin':'hotel-icon'}.svg`" :alt="item.label" />
                <div>
                  <span v-html="textpWithHilght(item.label)"></span>
                  <div>
                    <small>{{ item.city }}, {{ item.country }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </TextField>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import MethodsMixin from './TabItemApı'
import TextField from '@/components/GlobalComponents/TextField.vue'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    TextField,
  },
  mixins: [MethodsMixin],
  data() {
    return {
      location: { id: -1, value: '' },
    }
  },
  watch: {
    location: {
      deep: true,
      handler(data) {
        this.$emit('input', data)
      },
    },
  },
  methods: {
    setFocusSearchLocation() {
      this.ShowAutocomplete = true
      setTimeout(() => {
        this.$refs.searchLocation.focus()
        if (this.location.value !== '')
          this.setSearchLocation(this.location.value)
      }, 50)
    },
    onClickOutside() {
      this.ShowAutocomplete = false
    },
    setSearchLocation(data) {
      this.location.value = data
      this.sendAutoComplate(data)
    },
    textpWithHilght(text) {
      return text
        .toLowerCase()
        .replace(
          this.location.value.toLowerCase(),
          '<span class="highlight">' + this.location.value + '</span>'
        )
    },
    setClearAutocomplete() {
      this.ShowAutocomplete = false
      this.AutocompleteIsLoading = false
      this.ResultAutocomplete = []
    },
    setClickAutocomplete(id, value) {
      this.location = { id, value }
      this.setClearAutocomplete()
    },
  },
}
</script>