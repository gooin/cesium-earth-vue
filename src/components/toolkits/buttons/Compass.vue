<template>
    <!--    <div id="compass" style="transform: rotate(8.25158deg)">-->
    <div id="compass" v-bind:style="{ transform: this.rotateAngle }">
        <img src="../../../assets/compass.png" alt="" @click="resetHeading">
    </div>
</template>

<script>
    export default {
        name: "Compass",
        data() {
            return {
                rotateAngle: "rotate(0deg)",
                prevHeading: 0,
                heading: 0
            }
        },
        mounted() {
            this.waitViewerInit()
        },
        methods: {
            waitViewerInit() {
                let wait = setInterval(() => {
                    if (typeof viewer === undefined) {
                        console.warn("viewer not init yet");
                    } else {
                        console.log("add map compass");
                        this.bindHeading();
                        clearInterval(wait);
                    }
                }, 1000);
            },

            bindHeading() {
                // let self = this;
                var prevHeading;
                var heading;
                let self = this;
                scene.postRender.addEventListener(function () {
                    //==================================
                    // 指北针跟随
                    //==================================

                    // 解决在相机在一定高度缩放时， heading突变的问题
                    prevHeading = heading;
                    heading = scene.camera.heading;
                    if (prevHeading - heading > 3) {
                        heading = heading * 2;
                    }
                    // 指北针跟随
                    var x = -Cesium.Math.toDegrees(heading - 0.01);
                    var degrees = "rotate(" + x + "deg)";
                    // console.log("degrees", degrees);

                    self.rotateAngle = degrees;
                    // console.log("degrees", self.rotateAngle);
                    // $("#compass").css("transform", degrees);
                });
            },
            removeBindHeading() {

            },
            resetHeading() {
                scene.camera.flyTo({
                    destination: scene.camera.position,
                    orientation: {
                        heading: Cesium.Math.toRadians(0)
                    }
                });
            },
        }
    }

</script>

<style scoped>
    #compass {
        position: fixed;
        right: 8rem;
        bottom: 1.75rem;
        z-index: 31;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #263238;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #compass img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
</style>