<template>
    <div id="change2d3d" @click="changeView">
        <el-tooltip
                class="item"
                effect="dark"
                :content=this.tooltip
                placement="left"
                visible-arrow="false"
        >
            <h5 v-if="show3D">3D</h5>
            <h5 v-else>2D</h5>
        </el-tooltip>

    </div>
</template>

<script>
    //TODO: camheight>15000时3d按钮禁用
    export default {
        name: "Change2D3D",
        data() {
            return {
                tooltip: this.$t('tooltips.btn.3d'),
                show3D: true
            }
        },
        methods: {
            changeView() {
                console.log("viewer", viewer);
                this.show3D = !this.show3D;
                this.show3D ? this.cam2dShow() : this.cam3dShow()
            },
            cam2dShow() {
                viewer.camera.flyTo({
                    destination: viewer.camera.position,
                    orientation: {
                        heading: viewer.camera.heading,
                        pitch: Cesium.Math.toRadians(-45.0),
                        roll: viewer.camera.roll
                    },
                    duration: 1
                });
                viewer.camera.flyCircle(viewer.camera.position)
            },
            cam3dShow() {
                viewer.camera.stopFlyCircle();
                viewer.camera.flyTo({
                    destination: viewer.camera.position,
                    orientation: {
                        heading: viewer.camera.heading,
                        pitch: -1.5677956316807427,
                        roll: viewer.camera.roll
                    },
                    duration: 1
                });
            }
        },
        computed: {},
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

    #change2d3d h5 {
        cursor: pointer;
    }
</style>