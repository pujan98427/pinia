<script setup>
import { useTaskStore } from './stores/TaskStore.js';
const taskStore = useTaskStore();
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue';
import TaskForm from './components/TaskForm.vue'

const toggleData = ref('all')
function toggleHandler(meta) {
  toggleData.value = meta
}
</script>
<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>

      <!-- new task form -->
      <div class="new-task-form">
        <TaskForm />
      </div>

      <div class="">
        <input type="radio" name="taskDetail" value="all" checked id="all" @input="toggleHandler($event.target.value)">
        <mark>show all task</mark>
        <input style="margin-left: 20px;" type="radio" name="taskDetail" value="fav" id="fav"
          @input="toggleHandler($event.target.value)"> <mark class="">show fav task</mark>
      </div>

    </header>
    <section>
      <div class="task-wrapper">
        <div class="" v-if="toggleData === 'all'">
          <p>you have {{ taskStore.totalCount }} tasks</p>
          <div class="" v-for="task in taskStore.tasks">
            <TaskDetails :task="task" />
          </div>

        </div>
        <div class="" v-if="toggleData === 'fav'">
          <p>you have {{ taskStore.favCount }} tasks</p>
          <div class="" v-for="task in taskStore.favs">
            <TaskDetails :task="task" />
          </div>

        </div>

      </div>
    </section>
  </main>
</template>



<style lang="scss" scoped>
.task-wrapper {
  max-width: 500px;
  margin: 0 auto;

}
</style>