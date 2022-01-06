<template>
  <div class="sign-up-section">
    <img src="/images/model.png" alt="model" />
    <div class="right-side">
      <h1>Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın</h1>
      <div class="row">
        <div class="col-12 col-md-6">
          <TextField v-model="form.email" icon="mail@2x.png" label="E-Posta Adresiniz" />
        </div>
        <div class="col-12 col-md-6">
            <button>Gönder</button>
        </div>
      </div>
      <div class="row">
          <div class="col-12 col-md-5">
              <CheckboxFields v-model="form.acceptNews">  <strong>%50’ye varan</strong> Fırsat ve Kampanyalardan haberdar olmak istiyorum </CheckboxFields>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from '@/components/GlobalComponents/TextField.vue'
import CheckboxFields from '@/components/GlobalComponents/CheckboxFields.vue'
export default {
  components: { TextField, CheckboxFields },
  data() {
    return {
      form: {
        email: 'begum@begum.com',
        acceptNews: false
      },
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/SignUpSection.scss';
</style>