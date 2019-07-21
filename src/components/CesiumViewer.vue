<template>
    <div>
        <div id="cesiumContainer">
        </div>
<!--        <MapStatusBar></MapStatusBar>-->
        <Compass></Compass>
    </div>

</template>

<script>
    import MapStatusBar from './toolkits/MapStatusBar.vue'
    import Compass from './toolkits/Compass.vue'

    export default {
        name: "CesiumViewer",
        components: {
            MapStatusBar,
            Compass
        },
        mounted() {
            this.initViewer();
        },
        methods: {
            initViewer() {
                let Cesium = window.Cesium;
                console.log("Cesium", Cesium);
                
                const viewer = new Cesium.Viewer("cesiumContainer", {
                    infoBox: false,
                    selectionIndicator: false,
                    requestRenderMode: true,
                    // imageryProvider: new Cesium.TiandituImageryProvider({
                    //   mapStyle: Cesium.TiandituMapsStyle.VEC_C // 矢量
                    //   // mapStyle: Cesium.TiandituMapsStyle.IMG_C  //卫星
                    // }),
                    // terrainProvider: new Cesium.CesiumTerrainProvider({
                    //   url: 'https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path',
                    //   requestVertexNormals: true
                    // })
                });
                window.viewer = viewer;
                window.scene = viewer.scene;
            }
        }
    }

</script>

<style scoped>
    div, #cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background: #66ccff;
        display: flex;
    }
    .cesium-credit-logoContainer{
        display: none;
    }
</style>