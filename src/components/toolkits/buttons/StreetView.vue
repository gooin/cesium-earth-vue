<template>
    <div id="street">
    <!--        <img src="../../../assets/gps_not_fixed.png" alt="">-->
    <h5>{{ $t('message.hello') }}</h5>
</div>
</template>

<script>
    export default {
        name: "StreetView",
        mounted() {
            // i18n.locale = 'en'
        }
    }
</script>

<style scoped>
    #street {
        position: fixed;
        right: 5rem;
        bottom: 7.5rem;
        z-index: 2;
        color: #ffffff;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #263238;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #street img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
</style>