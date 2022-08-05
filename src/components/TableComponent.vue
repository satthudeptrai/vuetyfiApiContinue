<template>
  <div>
    <v-simple-table
      :height="heightTable"
      :fixed-header="fixedHeader"
    >
      <template v-slot:default>
        <thead>
          <slot name="headercustom"></slot>
        </thead>
        <tbody>
          <slot name="bodycustom"></slot>
        </tbody>
      </template>
    </v-simple-table>
    <div class="pagination">
      <v-pagination
        v-model="page"
        :length="total"
        :total-visible="7"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    heightTable: {
      type: Number,
      default: 400
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    pageTable: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      page: this.pageTable
    }
  },
  watch: {
    page(newValue) {
      this.$emit('changePage', newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
 .pagination {
  margin-top: 10px;
 }
</style>