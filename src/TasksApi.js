import axios from "axios";

export default {
  getTasks: (callback) => {
    axios.get("http://localhost:3000/tasks/").then((response) => {
      callback(response.data);
    });
  },
  delTask: (id, callback) => {
    console.log(id);
    axios.delete(`http://localhost:3000/tasks/${id}`).then((response) => {
      callback(response);
    });
  },
  update: (id, criacao, callback) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(criacao),
    }).then((response) => {
      callback(response);
    });
  },

  createTask(criacao, callback) {
    fetch(`http://localhost:3000/tasks/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(criacao),
    }).then((response) => {
      callback(response);
    });
  },
};
