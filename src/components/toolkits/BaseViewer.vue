<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "BaseViewer",
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
        imageryProvider: new Cesium.BingMapsImageryProvider({
          key:
            "Al5MzGsvMteMn3RBQ7K17HbOnSC1kre0UZE2AxGA752UEXpWG7KB702ZC34uP9EN", //可至官网（https://www.bingmapsportal.com/）申请key
          url: "//dev.virtualearth.net"
        }),
        terrainProvider: new Cesium.CesiumTerrainProvider({
          url:
            "https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path",
          requestVertexNormals: true
        })
      });
      // this.viewer=viewer;
      // this.scene=viewer.scene;
      // console.log('this.viewer :', this.viewer);
      window.viewer = viewer;
      window.scene = viewer.scene;
    }
  }
};
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #66ccff;
  /* display: flex; */
}
</style>