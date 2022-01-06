<template>
  <div class="informations">
    <InformationCollapse v-for="(info, i) in infos" :key="i" :index="i" :item="info" />
  </div>
</template>

<script>
import InformationCollapse from './components/InformationCollapse.vue'
export default {
  components: { InformationCollapse },
  data () {
    return {
        infos: [
            { id: 1, title: 'Daha Fazla Tatil, TatilBudur!', description: '1997 yılından bu yana binlerce kişiye otel, tur, uçak ve organizasyon hizmetleri sunan markamız, her geçen gün daha da büyüyerek hayalinizdeki tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.'},
            { id: 2, title: 'En Uygun Tatil Fırsatları', description: 'Tatilbudur.com ile unutulmaz bir tatil deneyimine hazır mısınız? Hem yurt içinde hem de yurt dışında birbirinden farklı konaklama seçenekleri ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil fırsatlarını sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle kaliteli hizmetin yeni adresi olma yolunda ilerliyor.'},
            { id: 2, title: 'Tatil Fiyatları', description: 'Tatilbudur.com’da birçok farklı ve değişik uygun fiyatlı tatil önerileri sizler için bir araya geliyor. Yapacağınız tek şey hayal ettiğiniz tatili seçmek. Yüzlerce farklı lokasyonda her zaman istediğiniz tatile uygun fiyat garantisiyle çıkabilir, seyahat planınızı sorunsuzca planlayabilirsiniz. Size en uygun tatil seçeneklerini inceleyerek dilediğiniz tatile bir adım daha yaklaşabilirsiniz. Uygun fiyatlı otel ve tur seçenekleriyle tatil severlerin en çok tercih ettiği online seyahat acentelerinden birisi olan web sitemizde çok sayıda tatil fırsatı bulabilirsiniz. Dilerseniz muhteşem bir balayı tatili yapın veya kültür turlarıyla bilgi hazinenize yeni yerler ekleyin. Dilerseniz de farklı ülkeleri keşfedin. Size en uygun avantajlı tatil fırsatlarını web sitemizde bulabilir, peşin fiyatına taksit imkanlarından yararlanabilirsiniz.'},
            { id: 2, title: 'Türkiye’de En Güzel Tatil Yerleri', description: 'Herkesin en sevdiği rotalardan birisi olan Ege ve Akdeniz bölgesinde birçok farklı içeriklere sahip tur düzenleniyor. Likya Turları, Karya Turları, Kuzey Ege Turları, Salda ve Göller Yöresi Turları, Ege-Akdeniz Turları ve Karadeniz Turlarıyla çok sayıda yeni lokasyonu keşfedebilirsiniz. Karadeniz Turlarıyla; Ordu’yu, Trabzon’u, Rize’yi, Artvin’i ve Batum’u ziyaret edebilirsiniz. Üstelik Gap ve Doğu Anadolu turları diğer kültür turları kadar ilgi görüyor. Kültür, gastronomi ve tarihi birikime doyacağınız Gap turlarını da inceleyebilirsiniz. Talebe göre sıklıkla düzenlenen tatil turları, birbirinden zengin içerikleriyle sizleri bekliyor. Tatilbudur.com’un sömestir, yılbaşı, 23 Nisan, 19 Mayıs, Ramazan Bayramı, Şeker Bayramı gibi özel günlerde mevcut olan kültür turlarına daha uygun fiyatlarla rezervasyon yaptırabilir ve taksit imkanlarından faydalanabilirsiniz. Web sitemizde aynı zamanda günübirlik ve hafta sonu turları da bulunuyor. Hızlı geçen haftanın sonunda keyifli bir mola verip, farklı ve eğlenceli hafta sonu geçirebilirsiniz.'},
            { id: 2, title: 'Dünyanın En Güzel Tatil Yerleri', description: 'Eğer tatilinizi yurt dışında geçirmeye karar verdiyseniz Tatilbudur.com’un geniş içeriğe sahip tur ve gezi programları, vize işlemleri, transfer imkanı, vizesiz ve uygun fiyatlı yurt dışı tur seçenekleri, kalıpların dışına çıkmış farklı tatil rotaları, otobüsle veya uçakla ulaşım olanakları, profesyonel rehberleri ve daha fazla ayrıcalıkla muhteşem bir yurt dışı tatili yapabilirsiniz. Dünyanın en güzel rotalarını keşfetme planlarınız varsa Asya kıtasından Avrupa kıtasına kadar uzanan yurt dışı tur seçenekleriyle benzersiz maceralara siz de atılabilirsiniz.'},
        ]
    }
  }
}
</script>
<style lang="scss">
@import '~/static/scss/components/informations.scss';
</style>