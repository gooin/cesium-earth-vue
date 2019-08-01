<template>
    <div id="location">
        <img src="../../../assets/gps_fixed.png" alt="" @click="getPosition">
    </div>
</template>

<script>
    export default {
        name: "Location",
        methods: {
            getPosition() {
                //// 原生 HTML5 浏览器定位方法 // 仅在https下生效
                if (!navigator.geolocation) {
                    console.log("您的浏览器不支持地理位置");
                    return;
                }

                navigator.geolocation.getCurrentPosition(success, error);

                function success(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    // alert(longitude + "," + latitude);
                    // console.log(latitude);
                    // console.log(longitude);
                    // viewer.entities.add({
                    //     position: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1.0),
                    //     point: {
                    //         pixelSize: 10
                    //
                    //     }
                    // });
                    viewer.camera.flyTo({
                        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 15000.0)
                    })
                }

                function error() {
                    // 无法获取位置的时候， 用ip定位
                    $.ajax('https://ipapi.co/json/')
                        .done(function (response) {
                            // console.log(response);
                            viewer.camera.flyTo({
                                destination: Cesium.Cartesian3.fromDegrees(response.longitude, response.latitude, 15000.0)
                            })
                        });
                }

                // // 相对还行
                // $.ajax('https://ipapi.co/json/')
                //     .done(function (response) {
                //         console.log(response);
                //         viewer.camera.flyTo({
                //             destination: Cesium.Cartesian3.fromDegrees(response.longitude,response.latitude, 15000.0)
                //         })
                //     });
                //
                // // ipINFO 定位， 不准
                // $.get("https://ipinfo.io", function (response) {
                //     var lonlat = response.loc.split(',');
                //     // alert(response);
                //     console.log(response);
                //     viewer.camera.flyTo({
                //         destination: Cesium.Cartesian3.fromDegrees(lonlat[1] * 1, lonlat[0] * 1, 15000.0)
                //     })
                // }, "jsonp");
            }
        }
    }
</script>

<style scoped>
    #location {
        position: fixed;
        right: 1.5rem;
        bottom: 8em;
        z-index: 2;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #263238;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #location img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
</style>