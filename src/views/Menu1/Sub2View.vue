<template>
  <div>
    <v-select
      v-model="select"
      :items="items"
      item-text="name"
      item-value="url"
      label="list pokemon"
      class="select-poke"
      clearable 
    ></v-select>
    <v-btn
      color="success"
      class="mr-4"
      @click="view"
    >
      View
    </v-btn>
    <v-btn class="mr-4" @click="toggleDialog(true)" :disabled="!pokemon">
      Open
    </v-btn>
    <v-btn class="mr-4" @click="addPokemon()" :disabled="!pokemon">
      Add
    </v-btn>
    <div v-if="pokemon">
      <v-img
        :lazy-src="pokemon.sprites.front_default"
        max-height="500"
        max-width="500"
        :src="pokemon.sprites.front_default"
      ></v-img>
    </div>
    <ListPokemon ref="refListPokemon" @openPopup="openPopup" />
    <DialogComponent
      :dialog="showDialog"
      :info="pokemon"
      @toggleDialog='toggleDialog'
    />
  </div>
</template>

<script>
import {getList, getPokemon} from '@/api/common';
import DialogComponent from '@/components/DialogComponent';
import ListPokemon from './ListPokemon';
export default {
  name: 'Sub2View',
  components: {
    DialogComponent,
    ListPokemon
  },
  data() {
    return {
      items: [],
      select: '',
      pokemon: null,
      showDialog: false,
    }
  },
  async mounted () {
    try {
      const res = await getList();
      this.items = res.results;
    } catch (error) {
      console.log('error', error)
    }
  },
  methods: {
    async view() {
      if(this.select) {
        this.pokemon = await getPokemon(this.select);
      } else {
        this.pokemon = null
      }
    },
    toggleDialog(event) {
      this.showDialog = event;
    },
    addPokemon() {
      if (this.pokemon) {
        this.$refs.refListPokemon.addPokemon(this.pokemon);
      }
    },
    async openPopup(item) {
      this.pokemon = await item;
      this.toggleDialog(true);
    }
  },
}
</script>

<style lang="scss" scoped>
  .select-poke {
    width: 200px;
  }
</style>>