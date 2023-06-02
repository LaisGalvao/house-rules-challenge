<template>
  <HouseRulesTable :rules="this.rules" />
</template>

<script>
import HouseRulesTable from '~/components/HouseRulesTable.vue'
export default {
  name: 'IndexPage',
  components: HouseRulesTable,
  data() {
    return {
      rules: [
        /* {
          id: 2,
          name: 'No Pets',
          active: 1,
          order: 0,
        },
        {
          id: 4,
          name: 'Events (On Application)',
          active: 1,
          order: 0,
        },
        {
          id: 5,
          name: 'Late Check-out Available',
          active: 1,
          order: 0,
        },
        {
          id: 6,
          name: 'No Smoking',
          active: 1,
          order: 0,
        },
        {
          id: 7,
          name: 'No Parties/Events',
          active: 1,
          order: 0,
        },
        {
          id: 8,
          name: 'Age Restriction',
          active: 1,
          order: 0,
        }, */
      ],
    }
  },
  mounted() {
    this.$nextTick().then(this.fetchData)
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('house_rules/')
        const data = response.data
        this.rules = data
        // Faça algo com os dados recebidos da API
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
