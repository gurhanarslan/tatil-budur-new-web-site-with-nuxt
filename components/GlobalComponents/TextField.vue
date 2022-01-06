<template>
  <div :class="{ 'suggestion-input': suggestion }">
    <label class="inp">
      <input
        id="inp"
        :class="{ search, 'no-icon': noIcon }"
        :value="value"
        :readonly="readOnly"
        type="text"
        placeholder=" "
        @focus="(e) => $emit('focus', e)"
        @input="(e) => $emit('input', e.target.value)"
      />
      <span :class="{ search, 'no-icon': noIcon  }" class="label">{{ label }}</span>
      <span class="focus-bg"></span>
      <span v-if="!noIcon" class="icon"><img :src="`/images/icons/${icon}`" :alt="icon" /></span>
      <span v-if="select" class="icon-select"><img :src="`/images/icons/down.svg`" alt="down" /></span>
    </label>
    <slot name="suggestion" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    search: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: 'mail@2x.png',
      type: String,
    },
    noIcon: {
      default: false,
      type: Boolean
    },
    select: {
      default: false,
      type: Boolean
    },
    readOnly: {
      default: false,
      type: Boolean
    },
    suggestion: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
@import '~/static/scss/components/TextFields.sass';
</style>