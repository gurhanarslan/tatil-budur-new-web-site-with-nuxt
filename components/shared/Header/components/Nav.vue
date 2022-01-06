<template>
  <nav>
    <ul>
      <li
        v-for="(item, i) in NavItems"
        :key="i"
        class="nav-item"
        @mouseover="item.func"
      >
        {{ item.title }}
        <img width="20" src="/images/icons/angle-down.svg" alt="down" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      NavItems: [
        { title: 'otel', func: () => this.$emit('mega') },
        { title: 'tur', func: () => this.$emit('mega') },
        { title: 'kampanyalar', func: () => this.$emit('mega') },
      ],
    }
  },
}
</script>