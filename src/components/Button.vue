<template>
<!-- we are creating a button with class = "btn" and inserting a prop named text using {{}} similarly we do the same with background colour  -->
    <button @click="onClick()"  :style="{background:color}" class="btn" >{{text}}</button>
    <!-- to listen to a click event for vue we can use @click -->
</template>

<script>
    export default {
        name: 'Button',
        // when we want to imbed we have to export them using props
        props: {
            text: String,
            color: String
        },
        // below is how we define methods
        methods: {
            onClick() {
                this.$emit('btn-click')
            },

        }
    }
</script>