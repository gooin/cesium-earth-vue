<template>
  <div id="earth-status">
    <p id="lon">{{lon}}</p>
    <p id="lat">{{lat}}</p>
    <p id="alt">{{alt}}</p>
    <p id="camHeight">{{camHeight}}</p>
  </div>
</template>

<script>
import {setInterval, clearInterval } from "timers";
export default {
  name: "MapStatusBar",
  data() {
    return {
      lon: "",
      lat: "",
      alt: "",
      camHeight: "",
      camHeightNum: 0
    };
  },
  // watch:{
  //   alt:
  // },
  mounted() {
    this.waitViewerInit();
    // this.showCamHeight();
  },
  methods: {
    waitViewerInit() {
      let wait = setInterval(() => {
        if (typeof viewer === undefined) {
          console.warn("viewer not init yet");
        } else {
          // setTimeout(this.showCamHeight(), 2000);
          console.log("add map toolkits");

          this.showCamHeight();
          this.showPosition();
          clearInterval(wait);
        }
      }, 1000);
    },
    showPosition() {
      let it = this;
      let moveHandler = new Cesium.ScreenSpaceEventHandler();
      moveHandler.setInputAction(function(move) {
        let position = viewer.scene.pickPosition(move.endPosition);
        // 判断鼠标位置是否在球体上，如果不在,position=undefined
        if (position !== undefined) {
          let carto = Cesium.Cartographic.fromCartesian(position);
          // console.log(carto)
          let alt = carto.height;
          // it.lon = '经度:' + alt
          let lon = Cesium.Math.toDegrees(carto.longitude);
          let lat = Cesium.Math.toDegrees(carto.latitude);
          var lonDMS = it.transformDMS(lon, "lon");
          var latDMS = it.transformDMS(lat, "lat");
          it.lon = "_经度: " + lonDMS;
          it.lat = "_纬度: " + latDMS;

          // 海拔：添加了地形才启用
          if (viewer.terrainProvider._availability) {
            // 小于2000km显示
            // console.log(it.camHeightNum)
            if (it.camHeightNum < 2000000 && it.camHeightNum !== 0) {
              it.alt = "_海拔: " + alt.toFixed(0) + "米";
            } else {
              it.alt = "";
            }
          }
        }
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

      // // 点击打印鼠标位置
      // // let time = -10
      // let timeArr = []
      moveHandler.setInputAction(function(move) {
        let position = viewer.scene.pickPosition(move.position);
        // 判断鼠标位置是否在球体上，如果不在,position=undefined
        if (position !== undefined) {
          let carto = Cesium.Cartographic.fromCartesian(position);
          let lon = Cesium.Math.toDegrees(carto.longitude);
          let lat = Cesium.Math.toDegrees(carto.latitude);
          //   console.log("lon :", lon);
          //   console.log("lat  :", lat);
          //   console.log("height  :", carto.height);
          // 0, -122.93797, 39.50935, 1776,
          // timeArr.push(time)
          // timeArr.push(lon)
          // timeArr.push(lat)
          // // timeArr.push(carto.height + 1)
          // // time += 10
          // console.log('timeArr :', timeArr)
        }
        // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },

    showCamHeight() {
      let it = this;
      viewer.scene.postRender.addEventListener(function() {
        //==================================
        // 获取相机的高度
        //==================================

        let cameraHeight = viewer.camera.positionCartographic.height;
        it.camHeightNum = viewer.camera.positionCartographic.height;
        // console.log(cameraHeight)
        if (cameraHeight < 10000) {
          it.camHeight = "_相机: " + parseFloat(cameraHeight).toFixed(0) + "米 ";
        } else {
          cameraHeight = cameraHeight / 1000;
          it.camHeight =
            "_相机: " + parseFloat(cameraHeight).toFixed(0) + "千米 ";
        }
        // console.log("camheight :", it.camHeight);
      });
      // setTimeout(this.showCamHeight(), 2000);
      // setInterval(() => {
      // console.warn("viewer not init yet wait");
      //   this.showCamHeight()
      // }, 3000);
      //TODO: wait viewer created
    },
    transformDMS(degree, direction) {
      let D = addZeroAtHead(Math.floor(degree));
      let M = addZeroAtHead(Math.floor((degree - D) * 60));
      let S = addZeroAtHead(Math.floor(((degree - D) * 60 - M) * 60));
      let result = D + "°" + M + "′" + S + "″";

      // 如果是个位数， 则在首位加 0
      function addZeroAtHead(num) {
        // if (num > -10 && num < 0) {
        //     num = '-0' + Math.abs(num)
        // }
        if (num > 0 && num < 10) {
          return "0" + num;
        }
        return num;
      }

      if (direction === "lon") {
        D > 0 ? (result += "E") : (result += "W");
        return result;
      }
      if (direction === "lat") {
        D > 0 ? (result += "N") : (result += "S");
        return result;
      }
      return result;
    }
  }
};
</script>

<style scoped>
#earth-status {
  font-size: 13px;
  position: fixed;
  height: 16px;
  width: calc(100% - 56px);
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
}

#alt {
  background-color: rgba(0, 0, 0, 0.7);
  margin: 0;
  float: right;
  font-size: 13px;
  color: #bdbdbd;
  /* align-content: flex-end; */
  text-shadow: 1px 0 5px #000;
}

#lon {
  background-color: rgba(0, 0, 0, 0.7);
  margin: 0;
  float: right;
  font-size: 13px;
  color: #bdbdbd;
  text-shadow: 1px 0 5px #000;
  /* align-content:flex-end; */
}

#lat {
  background-color: rgba(0, 0, 0, 0.7);
  margin: 0;
  float: right;
  font-size: 13px;
  color: #bdbdbd;
  text-shadow: 1px 0 5px #000;
}

#camHeight {
  background-color: rgba(0, 0, 0, 0.7);
  /* align-content: flex-end; */
  margin: 0;
  float: right;
  font-size: 13px;
  color: #bdbdbd;
  text-shadow: 1px 0 5px #000;
}
</style>
