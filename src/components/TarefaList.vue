<template>
  <div class="hello">
    <ul>
      <li v-for="t in tasks" :key="t.id">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ t.title }}</span>
                <h6>Tipo do projeto {{ t.project }}</h6>
                <h6>Task criada por {{ t.usuario }}</h6>
              </div>
              <div class="card-action">
                <button
                  style="margin-right: 1rem"
                  class="btn"
                  href="."
                  @click="$emit('edit-task', t.id)"
                >
                  Editar
                </button>

                <button
                  class="btn"
                  href="."
                  @click="$emit('deleta-task', t.id)"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    tasks: Array,
    taskId: Number,
  },
  data: function () {
    return {
      idAtual: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
}
</style>
