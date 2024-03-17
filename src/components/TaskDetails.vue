<script setup>
const props = defineProps({
    task: []
});
</script>
<template>
    <div class="task">
        <div class="">
            <h2>{{ task.title }}</h2>
            <p>{{ task.description }}</p>
        </div>

        <div class="icons">
            <i class="material-icons ">delete</i>
            <i class="material-icons">favorite</i>
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
</style>