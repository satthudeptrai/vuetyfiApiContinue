<template>
  <div class="about">
    <v-row gutter="24" class="search">
      <v-col cols="12" md="4">
        <v-text-field label="Name" v-model="searchForm.name"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          :items="items"
          item-text="label"
          item-value="value"
          label="Type"
          v-model="searchForm.type"
          clearable>
        </v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn depressed color="success">Search</v-btn>
      </v-col>
    </v-row>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      searchForm: {
        name: '',
        type: ''
      },
      items: [
        {
          value: 1,
          label: 'label1'
        },
        {
          value: 2,
          label: 'label2'
        },
        {
          value: 3,
          label: 'label3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  .search {
    align-items: center;
  }
}
</style>