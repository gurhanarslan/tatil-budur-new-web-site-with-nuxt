<template>
  <div class="discovery section">
    <h1>Her Zevke Uygun Turları Keşfet</h1>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          :class="{ active: active === tab.id }"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <discovery-card />
    <DiscoveryFooter />
  </div>
</template>

<script>
import DiscoveryCard from './components/DiscoveryCard.vue'
import DiscoveryFooter from './components/DiscoveryFooter.vue'
export default {
  components: { DiscoveryCard, DiscoveryFooter },
  data() {
    return {
      active: 1,
      tabs: [
        { id: 1, title: 'yurt dışı turları' },
        { id: 2, title: 'gemi turları' },
        { id: 3, title: 'kültür turları' },
        { id: 4, title: 'hastasonu turları' },
        { id: 5, title: 'mavi turları' },
      ]
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/Discovery.scss';
</style>