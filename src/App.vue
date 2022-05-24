<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <!-- 系统名称和logo -->
        <div class="head">
          <div>
            <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo" />
            <span>Vue3 admin</span>
          </div>
        </div>
        <!-- 为了美观的线条 -->
        <div class="line" />
        <el-menu background-color="#222832" text-color="#fff" :router="true">
          <!-- 一级栏目 -->
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <!-- 二级栏目 -->
            <el-menu-item-group>
              <el-menu-item index="/"
                ><i class="el-icon-data-line" />首页</el-menu-item
              >
              <el-menu-item index="/add"
                ><i class="el-icon-data-line" />添加商品</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <!-- 右边内容布局 -->
      <el-container class="content">
        <Header />
        <div class="main">
          <!--将 <router-view></router-view> 移到这里，并且用单标签-->
          <router-view />
        </div>
        <Footer />
      </el-container>
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
