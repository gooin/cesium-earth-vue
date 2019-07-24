<template>
  <div>
    <BaseViewer></BaseViewer>
    <MapStatusBar></MapStatusBar>
    <Compass></Compass>
  </div>
</template>

<script>

import BaseViewer from "./toolkits/BaseViewer.vue";
import MapStatusBar from "./toolkits/MapStatusBar.vue";
import Compass from "./toolkits/Compass.vue";

export default {
  name: "CesiumViewer",
  components: {
    BaseViewer,
    MapStatusBar,
    Compass
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