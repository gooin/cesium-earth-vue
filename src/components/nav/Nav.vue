<template>
  <div class="menu-nav">

    <el-tooltip
      v-for="(navItem,index) in nav"
      class="item"
      effect="dark"
      :content="navItem.text"
      placement="right"
      visible-arrow="false"
    >
      <div>
        <img :src="navItem.img" width="24px" height="24px" alt @click="showMenu">
      </div>
    </el-tooltip>

  </div>
</template>

<script>
//  const menuimg = require("../../assets/menu.png")
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        { text: "菜单", img: require("../../assets/menu.png") },
        { text: "搜索", img: require("../../assets/search.png") },
        { text: "探索者", img: require("../../assets/explore.png") },
        { text: "手气不错", img: require("../../assets/lucky.png") },
        { text: "我的地点", img: require("../../assets/bookmark.png") },
        { text: "分享", img: require("../../assets/share.png") },
        { text: "测量距离和面积", img: require("../../assets/measure.png") }
      ],
      navIsShow: {
        menu: false,
        search: false,
        explore: false,
        lucky: false,
        bookmark: false,
        share: false,
        measure: false
      }
    };
  },
  methods: {
    showMenu() {
      console.log("show menu");
    }
  }
};
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
.menu-nav div img {
  cursor: pointer;
}
</style>