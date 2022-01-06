<template>
  <div
    v-click-outside-select="onClickOutsideSelect"
    class="col-md-3 col-12 items"
  >
    <TextField
      v-model="numberofPerson.value"
      search
      suggestion
      icon="bed.svg"
      read-only
      select
      label="Kişi Sayısı"
      @focus="ShowSuggestionBar = true"
    >
      <template #suggestion>
        <div v-if="ShowSuggestionBar" class="suggestion-bar">
          <div class="bar-number-of-person">
            <div class="list">
              <div class="person-list">
                <div class="left-side">Yetişkin</div>
                <div class="right-side">
                  <button
                    :disabled="numberofPerson.parent < 1"
                    class="buttons"
                    @click="
                      numberofPerson.parent > 1 ? numberofPerson.parent-- : ''
                      setChangeNumberOfPerson()
                    "
                  >
                    -
                  </button>
                  <span class="number">{{ numberofPerson.parent }}</span>
                  <button
                    class="buttons"
                    @click="
                      numberofPerson.parent++
                      setChangeNumberOfPerson()
                    "
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="person-list">
                <div class="left-side">Çocuk</div>
                <div class="right-side">
                  <button
                    :disabled="numberofPerson.children.length < 1"
                    class="buttons"
                    @click="
                      numberofPerson.children.length > 0
                        ? numberofPerson.children.splice(
                            numberofPerson.children.length - 1,
                            1
                          )
                        : ''
                      setChangeNumberOfPerson()
                    "
                  >
                    -
                  </button>
                  <span class="number">{{
                    numberofPerson.children.length
                  }}</span>
                  <button
                    class="buttons"
                    @click="
                      numberofPerson.children.push({ value: '' })
                      setChangeNumberOfPerson()
                    "
                  >
                    +
                  </button>
                </div>
              </div>
              <h6 v-if="numberofPerson.children.length !== 0" class="title">
                LÜTFEN ÇOCUKLARIN YAŞINI SEÇİNİZ
              </h6>
              <div  v-click-outside-select-children="onClickOutsideSelectChildren" class="row">
                <div
                  v-for="(child, i) in numberofPerson.children"
                  :key="i"
                  class="col-6 children-list"
                >
                  <TextField
                    :label="`Çocuk ${i + 1}`"
                    no-icon
                    select
                    read-only
                    suggestion
                    :value="child.value === '' ? '' : `${child.value} Yaş`"
                    @focus="active = i; ShowChildrenSelect = true"
                  >
                    <template #suggestion>
                      <div v-if="ShowChildrenSelect && active === i" class="suggestion-bar">
                        <div class="bar-input-group">
                          <div class="bar-suggestion">
                            <div
                              v-for="c in 12"
                              :key="key + '-' + c"
                              class="suggestion-results"
                              @click="setClickSelect(c, child)"
                            >
                              <div>
                                <span>{{ c }} Yaş</span>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </TextField>
                </div>
              </div>
              <hr />
              <button @click="submit()">Uygula</button>
            </div>
          </div>
        </div>
      </template>
    </TextField>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import TextField from '~/components/GlobalComponents/TextField.vue'
export default {
  components: {
    TextField,
  },
  directives: {
    clickOutsideSelect: vClickOutside.directive,
    clickOutsideSelectChildren: vClickOutside.directive,
  },
  data() {
    return {
      active: -1,
      numberofPerson: { value: '1 Yetişkin', parent: 1, children: [] },
      ShowChildrenSelect: false,
      ShowSuggestionBar: false
    }
  },
  watch: {
    numberofPerson: {
      deep: true,
      handler(data) {
        this.$emit('input', data)
      },
    },
  },
  methods: {
    submit() {
      this.$emit('input', this.numberofPerson)
      this.ShowSuggestionBar = false
    },
    setClickSelect(val, child) {
      child.value = val
      this.ShowChildrenSelect = false
    },
    setChangeNumberOfPerson() {
      const data = this.numberofPerson
      this.numberofPerson.value = `${data.parent} Yetişkin`
      if (data.children.length > 0)
        this.numberofPerson.value += `, ${data.children.length} Çocuk`
    },
    onClickOutsideSelect() {
      this.ShowSuggestionBar = false
    },
    onClickOutsideSelectChildren() {
      this.ShowChildrenSelect = false
      this.active = -1
    },
  },
}
</script>