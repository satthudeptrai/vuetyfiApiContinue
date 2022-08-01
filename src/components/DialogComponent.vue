<template>
  <div>
    <v-dialog
      v-model="show"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Info Pokemon
        </v-card-title>

        <v-card-text>
          <div v-if="info">
            <v-img
              :src="info.sprites.front_default"
            ></v-img>
          </div>
        </v-card-text>


        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogComponent',
  props: {
    dialog: {
      require: true,
      type: Boolean
    },
    info: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    show() {
      return this.dialog;
    },
  },
  methods: {
    closeDialog() {
      this.$emit('toggleDialog', false);
    }
  }
}
</script>

<style>

</style>