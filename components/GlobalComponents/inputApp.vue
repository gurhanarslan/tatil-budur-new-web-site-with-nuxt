<template>
  <div class="input-form">
    <input type="text" :placeholder="placeholderInput" />
    <span>
        <img width="20" height="16" :src="iconComputed" :alt="icon">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    placeholderInput: {
      default: '',
      type:String
    },
    icon: {
      default: 'location-pin',
      type:String
    }
  },
  computed: {
      iconComputed () {
          return `/images/icons/${this.icon}.svg`
      }
  }
}
</script>