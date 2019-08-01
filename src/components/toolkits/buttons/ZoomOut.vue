<template>
    <div id="out">
        <h3>+</h3>
    </div>

</template>

<script>
    export default {
        name: "ZoomOut"
    }
</script>

<style scoped>
    #out {
        cursor: pointer;
        position: fixed;
        right: 12rem;
        bottom: 2rem;
        z-index: 2;
        width: 1.8rem;
        height: 1.8rem;
        background-color: #263238;
        /*border-radius: 50%;*/
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #out img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    /*#out h1 {*/
    /*    font-size: medium;*/
    /*}*/


</style>