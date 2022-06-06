<script setup>
import { onUnmounted, reactive } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
import { pathMap, localGet } from "@/utils";

const noMenu = ["/login"];
const router = useRouter();
const state = reactive({
  showMenu: true,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    // 如果路径是 /login 则正常执行
    next();
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet("token")) {
      // 如果没有，则跳至登录页面
      next({ path: "/login" });
    } else {
      // 否则继续执行
      next();
    }
  }
  state.showMenu = !noMenu.includes(to.path);
});
</script>

<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <img
              src="https://s.weituibao.com/1582958061265/mlogo.png"
              alt="logo"
            />
            <span>vue3 admin</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          :default-openeds="state.defaultOpen"
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-active="state.currentPath"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/introduce"
                ><i-data-line width="20" /><span class="menu-cutom-title"
                  >系统介绍</span
                ></el-menu-item
              >
              <el-menu-item index="/dashboard"
                ><i-odometer width="20" /><span class="menu-cutom-title"
                  >Dashboard</span
                ></el-menu-item
              >
              <el-menu-item index="/add"
                ><i-plus width="20" /><span class="menu-cutom-title"
                  >添加商品</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"
                ><i-picture width="20" /><span class="menu-cutom-title"
                  >轮播图配置</span
                ></el-menu-item
              >
              <el-menu-item index="/hot"
                ><i-star-filled width="20" /><span class="menu-cutom-title"
                  >热销商品配置</span
                ></el-menu-item
              >
              <el-menu-item index="/new"
                ><i-sell width="20" /><span class="menu-cutom-title"
                  >新品上线配置</span
                ></el-menu-item
              >
              <el-menu-item index="/recommend"
                ><i-pointer width="20" /><span class="menu-cutom-title"
                  >为你推荐配置</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"
                ><i-menu width="20" /><span class="menu-cutom-title"
                  >分类管理</span
                ></el-menu-item
              >
              <el-menu-item index="/good"
                ><i-goods-filled width="20" /><span class="menu-cutom-title"
                  >商品管理</span
                ></el-menu-item
              >
              <el-menu-item index="/guest"
                ><i-user-filled width="20" /><span class="menu-cutom-title"
                  >会员管理</span
                ></el-menu-item
              >
              <el-menu-item index="/order"
                ><i-tickets width="20" /><span class="menu-cutom-title"
                  >订单管理</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/account"
                ><i-unlock width="20" /><span class="menu-cutom-title"
                  >修改密码</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<style scoped>
.layout {
  /* 设置元素的最小高度，无法低于此高度 */
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  /*   vh: 相对于视窗的高度, 视窗被均分为100单位的vh */
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
}
.head img {
  width: 50px;
  height: 50px;
  /* 右边距 */
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  /* hsla() 函数使用色相、饱和度、亮度、透明度来定义颜色。 */
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  /* rgba() 函数使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  /* 允许在声明 CSS 属性值时执行一些计算 */
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}

li {
  background-color: #222832;
}
</style>
