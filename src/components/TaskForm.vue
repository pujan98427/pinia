<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';
const taskStore = useTaskStore();
const newTask = ref('')
const newTaskDescription = ref('')
const handleSubmit = () => {
    if (newTask.value.length > 0 || newTaskDescription.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
            description: newTaskDescription.value,
            isFav: false,
            id: Math.floor(Math.random() * 1000)
        })
        newTask.value = '';
        newTaskDescription.value = '';
    }
}
</script>
<template>
    <form action="" class="task-form" @submit.prevent="handleSubmit">
        <label for=""> Title</label>
        <input type="text" placeholder="Title here ..." v-model="newTask">
        <label for="" style="margin-top:16px">Description</label>
        <textarea name="" id="" cols="30" rows="10" v-model="newTaskDescription" />
        <button><i class="material-icons">add</i> Add</button>
    </form>
</template>



<style lang="scss" scoped>
.task-form {

    max-width: 500px;
    margin: 24px auto;
    text-align: left;


    button,
    textarea,

    input {
        width: 100%;
        padding: 4px 8px;
        margin-top: 8px;
    }

    label {
        display: inline-block;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-size: 16px;
    }


}
</style>