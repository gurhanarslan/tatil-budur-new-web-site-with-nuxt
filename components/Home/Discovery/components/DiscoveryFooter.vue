<template>
  <div class="footer">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="(item, i) in sliders" :key="i" class="img-wrapper">
        <section>
          <div class="left-side">
            <img :src="`/images/${item.image}.png`" :alt="item.title" />
          </div>
          <div class="right-side">{{item.title}}</div>
        </section>
      </div>
      <template #nextArrow>
      <div class="custom-arrow next">
       <img src="/images/icons/forward-arrow.png" alt="forward-arrow">
      </div>
    </template>
    <template #prevArrow>
      <div class="custom-arrow prev">
       <img src="/images/icons/back-arrow.png" alt="back-arrow">
      </div>
    </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        arrows: true,
      },
      sliders: [
          { title: 'Ülkelere göre turlar', image: 'accordion-country' },
          { title: '2022 Erken rezervasyon turları', image: '2022-ekonomi' },
          { title: 'Amerika turları', image: 'america-tours'},
          { title: 'balayı turları', image: 'balayi-turlari' },
          { title: 'Ülkelere göre turlar', image: 'accordion-country' },
          { title: '2022 Erken rezervasyon turları', image: '2022-ekonomi' },
          { title: 'Amerika turları', image: 'america-tours'},
          { title: 'balayı turları', image: 'balayi-turlari' },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/components/Discovery.scss';
</style>