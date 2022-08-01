<template>
  <div>
    <v-row v-if="list.length > 0" dense>
      <v-col
        v-for="(item, index) in list"
        :key="index"
        :cols="3"
      >
        <v-card :height="300" @click="openPopup(item)">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-text>
            <div class="img-contain">
              <v-img
                :width="100"
                :aspect-ratio="1"
                :src="item.sprites.front_default"
              ></v-img>
            </div>
            Abilities: {{abilities(item.abilities)}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ListPokemon',
  data() {
    return {
      list: []
    }
  },
  methods: {
    addPokemon(item) {
      this.list.push(item);
    },
    deletePokemon (index) {
      this.list.splice(index, 1);
    },
    abilities(value) {
      return value.map(item => item.ability.name).join(', ');
    },
    openPopup(item) {
      this.$emit('openPopup', item)
    }
  },
}
</script>

<style lang="scss" scoped>
  .img-contain {
    text-align: center;
    text-align: -webkit-center;
  }
</style>>