<template>
  <HouseRulesTable :rules="rules" :fields="fields"/>
</template>

<script>
import HouseRulesTable from '~/components/HouseRulesTable.vue'
export default {
  name: 'IndexPage',
  components: HouseRulesTable,
  data() {
    return {
      rules: [],
      fields: ['name', 'active', 'actions']
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('house_rules/')
        const data = response.data
        console.log(data.data)
        this.rules = data.data.entities
        // Faça algo com os dados recebidos da API
      } catch (error) {
        console.error(error)
      }
    },
    
  },
}
</script>
