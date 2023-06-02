<template>
  <div class="container-fluid mt-5">
    <b-table :items="rules" :fields="fields" dark class="container text-center">
      <template #cell(name)="row">
        {{ row.value }}
      </template>
      <template #cell(description)="row">
        {{ row.value }}
      </template>
      <template #cell(actions)="row">
        <div>
          <button class="btn btn-warning" @click="editRule(row.item)">Edit</button>
          <button class="btn btn-danger" @click="deleteRule(row.item)">Delete</button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'HouseRulesTable',
  props: {
    rules: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  methods: {
    editRule(rule) {
      // Lógica para editar a regra
      console.log('Editar regra:', rule);
    },
    deleteRule(rule) {
      // Lógica para excluir a regra
      console.log('Excluir regra:', rule);
    }
  }
}
</script>
<style scoped>

table{
  border-radius: 15px;
}
</style>
