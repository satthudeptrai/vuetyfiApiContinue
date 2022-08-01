<template>
  <div>
    <v-form
      ref="form"
    >
      <v-text-field
        label="name"
        v-model="test.name"
        :rules="rules.name"
      >
      </v-text-field>
      <v-text-field
        label="atribute"
        v-model="test.atribute"
        :rules="rules.atribute"
      >
      </v-text-field>
    </v-form>
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Sub1View',
  data() {
    return {
      test: this.$store.getters.test,
      rules: {
        name: [
          v => !!v || 'Name is required'
        ],
        atribute: [
          v => !!v || 'Name is required',
          v => /\d/.test(v) || 'Phải có số'
        ]
      }
    }
  },
  async mounted () {
    
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setTest', this.test);
      }
    },
  },
}
</script>

<style>

</style>