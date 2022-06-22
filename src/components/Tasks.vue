

<template>
<!-- in vue if you want to run a for loop you need a v-bind key which is unique w-->
<!-- for task in tasks where tasks is an array as defined in the props script -->
    <div :key='task.id' v-for="task in tasks" >
        <!-- we are calling the delete-task using '@' and emitting it again to the App.vue (App.vue -> Tasks.vue -> Task.vue) -->
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task',task.id)" :task='task' />

    </div>
</template>


<script>
import Task from "./Task"

    export default {
        name: 'Tasks',
        props: {
            // we can think of props as a blank line that needs to be filled later
            tasks : Array
        },
        components: {
            Task
        },
        emits: ['delete-task', 'toggle-reminder'],
    }
</script>