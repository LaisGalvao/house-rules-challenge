<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <table class="table table-dark">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- Conteúdo da tabela será adicionado dinamicamente aqui -->
          <tr v-for="(rule, index) in rules" :key="index">
            <td>{{ rule.name }}</td>
            <td>{{ rule.description }}</td>
            <td>
              <!-- Botões de edição e exclusão serão adicionados aqui -->
              <button class="btn-warning" @click="editRule(index)">Editar</button>
              <button class="btn-danger" @click="deleteRule(index)">Excluir</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HouseRulesTable',
  props: {
    rules: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      editedRules: []
    };
  },
  methods: {
    editRule(index) {
      // Lógica para editar a regra
      this.editedRules[index] = { ...this.rules[index] };
    },
    deleteRule(index) {
      // Lógica para excluir a regra
      this.editedRules.splice(index, 1);
    }
  }
}
</script>
