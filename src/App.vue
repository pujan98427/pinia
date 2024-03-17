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
  <main style="">
    <header style="">
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
    </header>
    <section style="">
      <div style="flex:1; padding-right: 24px;
  border-right: 1px solid #545353;">
        <!-- new task form -->
        <div class="new-task-form">
          <TaskForm />
        </div>
      </div>
      <div style="flex:1; margin-left:24px">
        <div class="task-toggler-wrapper">
          <div class="task-toggler">
            <input type="radio" name="taskDetail" value="all" checked id="all"
              @input="toggleHandler($event.target.value)">
            <label for="all">All</label>

          </div>
          <div class="task-toggler">
            <input style="margin-left: 20px;" type="radio" name="taskDetail" value="fav" id="fav"
              @input="toggleHandler($event.target.value)"> <label for="fav">fav</label>

          </div>
        </div>
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

      </div>
    </section>
  </main>
</template>



<style lang="scss" scoped>
header {
  padding-right: 24px;
  border-right: 1px solid #545353;
}

section {
  margin-left: 24px;
  padding: 60px 30px;
  display: flex;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto
}

.task-wrapper {
  max-width: 500px;
  margin: 0 auto;

}

.task-toggler-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: #383737;
  max-width: 121px;
  margin: 0 auto 32px;

  .task-toggler {}

  input {
    display: none;

    &:checked+label {
      background-color: #fff;
      color: #111;
    }

  }

  label {
    display: inline-flex;
    padding: 8px 16px;
    background-color: #595959;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #111;
    }
  }
}
</style>