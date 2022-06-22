<template>
    <header>
        <!-- embedding title using prop in script -->
        <h1> {{title}} </h1> 
        <!-- with importing components we can have multiple btn's and we can use props to embed texts and background color without rewriting the script -->
        <Button v-show="homePage" @btn-click="$emit('toggle-add-task')"  :text= "showAddTask ? 'Close' : 'Add Task' " :color="showAddTask ? 'red' : 'green'" />
        <!-- <Button text= "Update Task" color="blue" />
        <Button text= "Delete Task" color="red" /> -->
    </header>
</template>

<script>
import Button from './Button'

// we will export this component and call it Header
    export default {
        name: 'Header',
        // we can embedd items in our template using {{}}, title is defined in the App.vue 
        // props can be defined using array or object
        //props: ['title']
        props: {
            title: String,
            showAddTask: Boolean
        },
        components: {
            Button
        },
        computed: {
            homePage() {
                if(this.$route.path ==='/' ) {
                    return true
                }else {
                    return false 
                }
            }
        }
    }
</script>


<style scoped> 
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>