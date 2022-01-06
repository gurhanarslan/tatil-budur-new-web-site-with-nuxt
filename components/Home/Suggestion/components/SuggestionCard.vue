<template>
  <div class="suggestions-product">
    <img :src="imagesComputed" :alt="item.title" />
    <div class="content">
      <h6>{{item.title}}</h6>
      <p class="count">{{item.count}} Otel</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: () => {},
    },
  },
  computed: {
      imagesComputed () {
          if (this.item.image) {
              return `/images/${this.item.image}.png`
          } else {
              return '/images/skate-hotels.png'
          }
      }
  }
}
</script>
<style lang="scss">
@import '~/static/scss/components/Suggestions.scss';
</style>