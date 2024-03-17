<script setup>
import { useTaskStore } from '@/stores/TaskStore';
const props = defineProps({
    task: []
});
const taskStore = useTaskStore();
</script>
<template>
    <div class="task">
        <div class="">
            <h2>{{ task.title }}</h2>
            <p>{{ task.description }}</p>
        </div>

        <div class="icons" style="cursor: pointer;">
            <i class="material-icons  " @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons " :class="{ active: task.isFav }"
                @click=" taskStore.toggleFavTask(task.id)">favorite</i>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #cecece;
    color: #111;
    margin-top: 16px;
    text-align: left;
    padding: 16px 20px;
}

.material-icons.active {
    color: red;
}
</style>