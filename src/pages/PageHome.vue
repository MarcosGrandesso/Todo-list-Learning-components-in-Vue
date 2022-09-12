<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <div class="aling">
      <TarefaList
        msg="Welcome to Your Vue.js App"
        :tasks="listaDeTarefa"
        @deleta-task="recebiDeleta"
        @edit-task="recebiEdit"
      />
      <FormsTask
        v-show="modoEdicao"
        :title="criacao.title"
        :usuario="criacao.usuario"
        :project="criacao.project"
        :btn="btn"
        @enviar-info="salvarInfo"
        @enviar-info-2="ApiCriar"
      >
      </FormsTask>
      <button class="btn circleb b" @click="recebiCriar">+</button>
    </div>
  </div>
</template>

<script>
import TarefaList from "../components/TarefaList.vue";
import FormsTask from "../components/FormsTask.vue";
import TasksApi from "../TasksApi";

export default {
  components: {
    TarefaList,
    FormsTask,
  },
  data: () => {
    return {
      listaDeTarefa: ["a", "b", "c"],
      modoEdicao: false,
      criacao: { title: "danielson", project: "teste", usuario: "nasdasd" },
      idAtual: null,
      btn: "",
    };
  },
  created() {
    this.get();
  },
  methods: {
    delecao() {
      TasksApi.delTask();
    },
    get() {
      TasksApi.getTasks((data) => {
        this.listaDeTarefa = data;
      });
    },
    recebiDeleta(id) {
      TasksApi.delTask(id, () => {
        this.get();
      });
    },
    recebiEdit(id) {
      if (this.modoEdicao) {
        this.modoEdicao = false;
      } else {
        this.modoEdicao = true;
      }
      this.btn = "editar";
      this.idAtual = id;
    },
    recebiCriar() {
      if (this.modoEdicao) {
        this.modoEdicao = false;
      } else {
        this.modoEdicao = true;
      }
      this.btn = "Criar";
    },

    salvarInfo(info) {
      this.criacao = info;
      TasksApi.update(this.idAtual, this.criacao, () => {
        this.get();
      });
    },
    ApiCriar(info) {
      this.criacao = info;
      TasksApi.createTask(this.criacao, () => {
        this.get();
      });
    },
  },
};
</script>

<style>
.b {
  margin-left: 1rem;
  margin-top: 1rem;
  width: 3rem;
}

.aling {
  display: flex;
  flex-direction: column;
}
</style>
