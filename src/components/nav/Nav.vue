<template>
    <div class="menu-nav">
        <!--        <img src="../../assets/logo.png" width="24px" height="24px" alt="">-->
        <!--        <div>-->
        <!--&lt;!&ndash;            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g></svg>&ndash;&gt;-->
        <!--            <img src="../../assets/logo.png" width="24px" height="24px" alt="">-->
        <!--        </div>-->
        <el-tooltip class="item" effect="dark" :content="nav.menu" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/menu.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.search" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/search.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.explore" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/explore.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.lucky" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/lucky.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.bookmark" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/bookmark.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.share" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/share.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="nav.measure" placement="right" visible-arrow="false">
            <div>
                <img src="../../assets/measure.png" width="24px" height="24px" alt="">
            </div>
        </el-tooltip>

        <!--        <div></div>-->
        <!--        <div></div>-->
        <!--        <div></div>-->
        <!--        <div></div>-->
        <!--        <div></div>-->
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                nav: {
                    menu: "菜单",
                    search: "搜索",
                    explore: "探索者",
                    lucky: "手气不错",
                    bookmark: "我的地点",
                    share: "分享",
                    measure: "测量距离和面积"
                }
            }
        }
    }
</script>

<style scoped>
    .menu-nav {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /*justify-content: center;*/
        width: 100%;
        height: 100%;
        background-color: #263238;
        padding: 12px 8px;
    }

    .menu-nav div {
        align-self: center;
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.5rem;
        margin-bottom: 2rem;
        /*background: #aa0000;*/
    }
</style>