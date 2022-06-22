<template>
<!-- the task.vue component will be the individual task items that will be inserted in the main Tasks.vue component which is the actual view -->
<!-- if task.reminder = true then class is reminder else blank, this class will also be names task as all times -->
    <div @dblclick="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'reminder' : '','task']">
    <!-- task.text meaning to display all the text values where your  text values come from the tasks object   -->

    <h3>{{task.text}}
        <!-- i represents icon from font awseome -->
        <!-- add event on i so that when clicked it will emit a 'delete task' to the Tasks.vue component -->
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <h1>{{task.day}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: {
            task: Object
        }
    }
</script>

<style scope>
.fas {
    color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>