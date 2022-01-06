<template>
  <div class="suggestions section">
    <h1>Kararsız mı Kaldınız?</h1>
    <p class="description">
      Nasıl bir Tatil istediğinize karar veremediyseniz size önerdiğimiz tatil
      temalarını inceleyin!
    </p>
    <div class="row">
      <div class="col-10 suggestions-list-item">
        <VueSlickCarousel v-bind="slickOptions">
          <div
            v-for="(item, i) in products"
            :key="i"
            class="suggestions-list-item"
          >
            <SuggestionProduct :item="item" />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="col-2 suggestions-list-item">
        <div class="view-all">
          <span>→</span>
          <span>Tümünü Gör</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionProduct from './components/SuggestionCard.vue'
export default {
  components: {
    SuggestionProduct,
  },
  data() {
    return {
      products: [
        { title: 'Kayak Otelleri', count: 2243, image: 'skate-hotels' },
        { title: 'Termal Oteller', count: 1234, image: 'termal-otelleri' },
        { title: 'Yetişkin Otelleri', count: 5302, image: 'yetiskin-otelleri' },
        {
          title: 'Çocuk Dostu Otelleri',
          count: 231,
          image: 'cocuk-dostu-otelleri',
        },
        { title: 'Denize Sıfır Oteller', count: 79, image: 'termal' },
      ],
      slickOptions: {
        slidesToShow: 5,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              focusOnSelect: true,
            },
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/Suggestions.scss';
</style>