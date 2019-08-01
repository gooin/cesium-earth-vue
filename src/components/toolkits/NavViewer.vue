<template>
    <div id="nav_viewer"></div>
</template>

<script>
    export default {
        name: "NavViewer"
    }
</script>

<style scoped>
    #nav_viewer {
        position: fixed;
        right: 1.5rem;
        bottom: 1.75rem;
        z-index: 31;
        width: 5rem;
        height: 5rem;
        background-color: #6cf;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>