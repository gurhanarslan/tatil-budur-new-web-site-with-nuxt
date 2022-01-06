<template>
  <div class="row footer-body">
    <div class="col-12 col-md-2">
      <ul class="search-links">
        <li v-for="(link, i) in searchLinks" :key="i">
          <img :style="link.width ? 'width:17px !important; margin-right: 12px !important': ''" :src="link.image" :alt="link.title" />
          <span>{{ link.title }}</span>
        </li>
      </ul>
    </div>
    <div
      v-for="(item, i) in links"
      :key="i"
      :class="`col-12 col-md-${item.col}`"
    >
      <h4 class="title">{{ item.title }}</h4>
      <div class="row">
        <div
          v-for="(row, j) in setColumn(item.links.length, item.col).repeat"
          :key="i + '-' + j"
          :class="`col-12 col-md-${setColumn(item.links.length, item.col).col}`"
        >
          <ul>
            <li
              v-for="(link, k) in setFilterLinks(item.links, j, item.col)"
              :key="i + '-' + j + '-' + k"
            >
              {{ link.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-1">
        <img class="etbis" src="/images/etbis@2x.png" alt="etbis">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchLinks: [
        { id: 1, title: 'otel ara', image: '/images/icons/hotel.svg' },
        { id: 2, title: 'uçak ara', image: '/images/icons/plane.svg' },
        { id: 3, title: 'tur ara', image: '/images/icons/suitcase.svg' },
        { id: 3, title: 'Kampanyalar', image: '/images/icons/offer.png',  width: '17px' },
      ],
      links: [
        {
          col: 5,
          title: 'öne çıkan kategoriler',
          links: [
            { title: 'Erken Rezervasyon' },
            { title: 'Termal Oteller' },
            { title: 'Kıbrıs Otelleri' },
            { title: 'Kış Otelleri' },
            { title: '1+1 Gece Otelleri' },
            { title: 'Yılbaşı Otelleri' },
            { title: 'Hafta Sonu Otelleri' },
            { title: 'İzmir Otelleri' },
            { title: 'İstanbul Otelleri' },
            { title: 'Kıbrıs Otelleri' },
            { title: 'Ankara Otelleri' },
            { title: 'Termal Otelleri' },
            { title: 'Yurtdışı Otelleri' },
            { title: 'Yurt dışı Otelleri' },
            { title: 'Yurt dışı Turları' },
            { title: 'Yurtdışı Turları' },
            { title: 'Kayak Otelleri' },
            { title: 'Haftasonu Otelleri' },
          ],
        },
        {
          col: 2,
          title: 'Rezervasyon',
          links: [
            { title: 'Rezervasyon Kontrol' },
            { title: 'Nasıl Rezervasyon Yapılır?' },
            { title: 'Grup Rezervasyon Talebi' },
          ],
        },
        {
          col: 2,
          title: 'TatilBudur',
          links: [
            { title: 'Hakkımızda' },
            { title: 'İletişim' },
            { title: 'İnsan Kaynakları' },
            { title: 'Müşteri İlişkileri' },
            { title: 'Şubelerimiz' },
            { title: 'Şube Başvuru Formu' },
            { title: 'Banka Hesaplarımız' },
            { title: 'Kütahya Çizelgesi' },
            { title: 'Sıkça Sorulan Sorular' },
          ],
        },
      ],
    }
  },
  methods: {
    setFilterLinks(items, index, col) {
      if (col > 2) {
        const rowItemStart = 7 * index
        return items.filter((item, i) => {
          if (rowItemStart <= i && i < rowItemStart + 7) {
            return item
          } else return false
        })
      } else {
        return items
      }
    },
    setColumn(length, col) {
      if (col > 2) {
        const row = Math.ceil(length % 7) - 1
        return { col: Math.ceil(12 / row), repeat: Math.ceil(12 / row)}
      } else return { col: 12, repeat: 1}
    },
  },
}
</script>