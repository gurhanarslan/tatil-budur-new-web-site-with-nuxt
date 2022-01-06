<template>
  <div>
    <div class="container-up">
      <PrimaryCarousel />
      <Opportunities />
      <LoginForSpecialDiscount />
    </div>
    <div class="container-down">
      <Showcase />
      <Discovery />
      <Suggestions />
      <SignUp />
      <AppPromotionMain />
      <PartnershipMain />
      <InformationsMain />
    </div>
  </div>
</template>

<script>
import PrimaryCarousel from '@/components/Home/PrimaryCarousel/PrimaryCarouselMain.vue'
import Opportunities from '@/components/Home/Opportunities/OpportunitiesMain.vue'
import LoginForSpecialDiscount from '@/components/Home/LoginForSpecialDiscount/LoginForSpecialDiscountMain.vue'
import Showcase from '@/components/Home/Showcase/ShowcaseMain.vue'
import Discovery from '@/components/Home/Discovery/DiscoveryMain.vue'
import Suggestions from '@/components/Home/Suggestion/SuggestionMain.vue'
import SignUp from '@/components/Home/SignUp/SignUpMain.vue'
import AppPromotionMain from '~/components/Home/AppPromotion/AppPromotionMain.vue'
import PartnershipMain from '~/components/Home/Partnership/PartnershipMain.vue'
import InformationsMain from '~/components/Home/Informations/InformationsMain.vue'
export default {
  components: {
    PrimaryCarousel,
    Opportunities,
    LoginForSpecialDiscount,
    Showcase,
    Discovery,
    Suggestions,
    SignUp,
    AppPromotionMain,
    PartnershipMain,
    InformationsMain,
  },
}
</script>
