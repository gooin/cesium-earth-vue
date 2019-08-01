<template>
    <div>
        <BaseViewer></BaseViewer>
        <MapStatusBar></MapStatusBar>
        <Compass></Compass>
        <Location></Location>
        <NavViewer></NavViewer>
        <Change2D3D></Change2D3D>
        <StreetView></StreetView>
        <ZoomIn></ZoomIn>
        <ZoomOut></ZoomOut>
    </div>
</template>

<script>

    import BaseViewer from "./toolkits/BaseViewer.vue";
    import MapStatusBar from "./toolkits/MapStatusBar.vue";
    import Compass from "./toolkits/buttons/Compass.vue";
    import Change2D3D from "./toolkits/buttons/Change2D3D.vue";
    import StreetView from "./toolkits/buttons/StreetView.vue";
    import Location from "./toolkits/buttons/Location.vue";
    import ZoomIn from "./toolkits/buttons/ZoomIn.vue";
    import ZoomOut from "./toolkits/buttons/ZoomOut.vue";
    import NavViewer from "./toolkits/NavViewer.vue";

    export default {
        name: "CesiumViewer",
        components: {
            BaseViewer,
            MapStatusBar,
            Compass,
            Location,
            NavViewer,
            Change2D3D,
            StreetView,
            ZoomIn,
            ZoomOut
        }
    };
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        /* background: #66ccff; */
        display: flex;
    }
</style>