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
  computed: {
    countPendingTask() {
      return this.taskList.filter(this.inProgress).length;
    },
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

    inProgress(a) {
      return !this.isCompleted(a);
    },

    isCompleted(a) {
      return a.boolean;
    },

    clearCompleted() {
      this.taskList = this.taskList.filter(this.inProgress);
    },

    clearInProgress() {
      this.taskList = this.taskList.filter(this.isCompleted);
    },
  },
}).mount("#app");
