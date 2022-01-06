<template>
  <div class="opportunities">
    <div class="big">
      <VueSlickCarousel v-bind="slickOptions">
        <section v-for="i in 5" :key="i">
          <div style="position: relative">
            <img src="/images/rezervation-fest.png" alt="rezervation-fest" />
            <div class="fligran">
              <h1>
                Erken Rezervasyon <br />
                Festivali
              </h1>
              <button class="sm">Fırsatları Gör</button>
            </div>
          </div>
        </section>
      </VueSlickCarousel>
    </div>
    <div class="side-1">
      <div class="opportunities-card">
        <div class="left-side">
          <span>Yılbaşına Özel Kültür Turlarını Keşfedin!</span>
          <button class="sm">Fırsatları Gör</button>
        </div>
        <div class="right-side">
          <img src="/images/baloon.png" alt="baloon" />
          <div class="badge">
            <badge/>
          </div>
        </div>
      </div>
      <div class="opportunities-card">
        <div class="left-side">
          <span>Kış Tatili için Hazırlanın!</span>
          <button class="sm">Fırsatları Gör</button>
        </div>
        <div class="right-side">
          <img src="/images/home-with-snow.png" alt="images/home-with-snow" />
        </div>
      </div>
    </div>
    <div class="side-2"></div>
    <div class="small-1">
      <div class="left-side">
        <div>
          Şimdi Al, <strong>4 Ay</strong> Sonra <br />
          Ödemeye Başla
        </div>
      </div>
      <div class="rigth-side">
        <img width="39" height="39" src="/images/icons/calender.svg" alt="calender" />
      </div>
    </div>
    <div class="small-2">
      <div class="left-side">
        <div>
          2 Gece ve Üstü Konaklamalarda <strong>+1 Gece Ücretsiz</strong>
        </div>
      </div>
      <div class="rigth-side">
        <img width="39" height="39" src="/images/icons/calender.svg" alt="calender" />
      </div>
    </div>
    <div class="small-3">
      <div class="left-side">
        <div>
          Kayak Otellerinde <strong> %45’e Varan </strong> Erken Rezervasyon
          <br />
          Fırsatı!
        </div>
      </div>
      <div class="rigth-side">
        <img width="39" height="39" src="/images/icons/calender.svg" alt="calender" />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Badge from '~/components/GlobalComponents/Badge.vue'
export default {
  components: { Badge },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        speed: 1000,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~/static/scss/components/opportunities.scss';
</style>