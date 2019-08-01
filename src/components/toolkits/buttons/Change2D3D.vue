<template>
    <div id="change2d3d">
<!--        <img src="../../../assets/gps_not_fixed.png" alt="">-->
       <h5>3D</h5>
    </div>
</template>

<script>
    export default {
        name: "Change2D3D"
    }
</script>

<style scoped>
    #change2d3d {
        position: fixed;
        right: 7.5rem;
        bottom: 5rem;
        z-index: 2;
        width: 2.5rem;
        color: #ffffff;
        height: 2.5rem;
        background-color: #263238;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #change2d3d img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
</style>