const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      taskList: [],
      newTask: {
        text: "",
        boolean: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.taskList.push({
        text: this.newTask.text,
        boolean: this.newTask.boolean,
      });
      this.newTask.text = "";
    },

    deleteTask(index) {
      this.taskList.splice(index, 1);
    },
  },
}).mount("#app");
