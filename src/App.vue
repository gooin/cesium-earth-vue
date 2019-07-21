<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--        <el-row class="container">-->
        <!--            <el-col :span="2" class="nav">-->
        <!--                <Menu></Menu>-->
        <!--            </el-col>-->
        <!--            <el-col :span="22" class="content">-->
        <!--                <CesiumViewer></CesiumViewer>-->
        <!--            </el-col>-->
        <!--        </el-row>-->

        <div class="container">
            <div class="menu">
                <Nav></Nav>
            </div>
            <div class="content">
                <CesiumViewer></CesiumViewer>
            </div>
        </div>


    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import CesiumViewer from './components/CesiumViewer.vue'

    import Nav from './components/nav/Nav.vue'

    export default {
        name: 'app',
        components: {
            CesiumViewer,
            Nav
        }
    }
</script>

<style>
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .menu {
        display: flex;
        justify-content: flex-start;
        width: 56px;
        height: 100%;
    }

    .content {
        display: flex;
        justify-content: flex-end;
        height: 100%;
        width:100%
    }

    .container {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>
