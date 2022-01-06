<template>
  <div class="checkbox">
    <input
      :value="value"
      type="checkbox"
      class="input-checkbox"
      @change="$emit('input', !value)"
    />
    <div class="checkbox-field">
      <svg
        v-if="value"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
        />
      </svg>
    </div>
    <p @click="$emit('input', !value)">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/Checkbox.scss';
</style>