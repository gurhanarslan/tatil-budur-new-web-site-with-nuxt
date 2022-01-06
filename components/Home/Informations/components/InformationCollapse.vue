<template>
  <article class="collapse">
    <h2>{{ item.title }}</h2>
    <p style="line-height:20px" :class="{'showed-more': showMore}">{{ item.description }}</p>
    <blockquote :id="`collapse-${index}`" class="none" style="line-height:20px">{{ item.description }}</blockquote>
    <div v-if="lineCount > 2 && !showMore" class="filigran"></div>
    <div v-if="lineCount > 2 && !showMore" class="show-more">
        <button @click="showMore = !showMore">Devamını Oku</button>
    </div>
    <div v-if="showMore && lineCount > 2" class="show-more">
        <button @click="showMore = !showMore">Daha Az Göster</button>
    </div>
  </article>
</template>

<script>
function countLines(id) {
  const el = document.getElementById(id)
  const divHeight = el.offsetHeight
  const lineHeight = parseInt(el.style.lineHeight)
  return divHeight / lineHeight
}
export default {
  props: {
    item: {
      default: () => {},
      type: Object,
      required: true,
    },
    index: {
      default: -1,
      type: Number,
      required: true,
    },
  },
    data () {
        return {
            showMore: false,
            lineCount: 0
        }
    },
  mounted () {
      this.lineCount = countLines(`collapse-${this.index}`)
  }
}
</script>