<template>
  <div class="showcase-product">
    <img :src="product.image" :alt="product.title" />
    <div class="content">
      <h2>{{product.title}}</h2>
      <span>{{product.tag}}</span>
      <div class="footer">
        <small>{{product.region}}, {{product.region}}</small>
        <strong>
          <b class="price">{{product.price}}<small class="currency">₺</small></b>' den <br />
          başlayan fiyatlarla
        </strong>
      </div>
      <div class="ribbon">
        <div class="left-side">{{product.point}}/10</div>
        <div class="right-side">{{product.status}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      default: () => {},
    },
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/Showcase.scss';
</style>