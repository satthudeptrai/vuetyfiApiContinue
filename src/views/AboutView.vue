<template>
  <div class="about">
    <v-container>
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
    </v-container>
    <TableComponent
      :heightTable="600"
      :pageTable="page"
      :total="total"
      @changePage="changePage">
      <tr slot="headercustom">
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Url
        </th>
        <th class="text-left">
          Url
        </th>
        <th class="text-left">
          Url
        </th>
      </tr>
      <tr
        v-for="item in datas"
        :key="item.name"
        slot="bodycustom"
      >
        <td :width="150">{{ item.name }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </TableComponent>
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';
import {getList} from '@/api/common';
export default {
  name: "AboutView",
  components: {
    TableComponent
  },
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
      ],
      datas: [],
      page: 1,
      total: 1
    }
  },
  created() {
    this.loadListData(1)
  },
  methods: {
    changePage(value) {
      this.page = value;
      this.loadListData(value);
    },
    async loadListData(page) {
      try {
        const res = await getList(20, (page - 1) * 20);
        this.datas = res.results;
        this.total = Math.ceil(res.count / 20)
      } catch (error) {
        console.log('error', error)
      }
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