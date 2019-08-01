<template>
    <div id="in">
        <h3>-</h3>
    </div>

</template>

<script>
    export default {
        name: "ZoomIn"
    }
</script>

<style scoped>
    #in {
        cursor: pointer;
        position: fixed;
        right: 13.8rem;
        bottom: 2rem;
        z-index: 2;
        width: 1.8rem;
        height: 1.8rem;
        /*border-radius: 50%;*/
        background-color: #263238;
        /*border-radius: 50%;*/
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
    }

    #in img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

</style>