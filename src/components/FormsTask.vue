<template>
  <div class="inputs">
    <input
      type="text"
      placeholder="title"
      :value="title"
      @input="form.title = $event.target.value"
    />
    <input
      type="text"
      placeholder="user"
      :value="usuario"
      @input="form.usuario = $event.target.value"
    />
    <input
      type="text"
      placeholder="project"
      :value="project"
      @input="form.project = $event.target.value"
    />
    <button class="btn" @click="enviarInfo">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        title: "",
        project: "",
        usuario: "",
      },
    };
  },
  props: {
    title: String,
    project: String,
    usuario: String,
    btn: String,
  },
  methods: {
    enviarInfo() {
      if (this.btn == "editar") {
        this.$emit("enviar-info", this.form);
      } else {
        this.$emit("enviar-info-2", this.form);
      }
    },
  },
};
</script>

<style>
.inputs {
  width: 800px;
  margin-left: 1rem;
}
</style>
