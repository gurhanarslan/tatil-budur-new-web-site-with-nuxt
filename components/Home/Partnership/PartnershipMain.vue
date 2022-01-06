<template>
  <div class="partnership">
    <div v-for="(partner, i) in partnerships" :key="i" class="partner">
      <div class="left-side">
        <img :src="partner.image" :alt="partner.title" />
      </div>
      <div class="right-side" :class="{'with-image': !partner.description}">
          <span v-html="partner.title"></span>
        <div v-if="partner.description" class="description">
          {{partner.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            partnerships: [
                { id: 1, title: '#milligururbudur', description: 'Tatilbudur.com Basketbol Milli Takımlar ANA SPONSORU', image: '/images/milligurur@2x.png'},
                { id: 2, title: 'Tatilbudur.com bir<img src="/images/işgirişim@2x.png" />ortaklığıdır.', description: false, image: '/images/iş@2x.png' },
            ]
        }
    }
}
</script>
<style lang="scss">
@import '~/static/scss/components/Partnership.scss';
</style>