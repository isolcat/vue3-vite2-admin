<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <img
          class="logo"
          src="https://pic.rmb.bdstatic.com/bjh/7d593d0a8a97845ca2f6e792be993922.png"
        />
      </div>
      <el-form
        label-position="top"
        :rules="state.rules"
        :model="state.ruleForm"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model.trim="state.ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="state.ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%" type="primary" @click="submitForm"
            >立即登录</el-button
          >
          <el-checkbox v-model="state.checked" @change="!checked"
            >下次自动登录</el-checkbox
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import axios from "@/utils/axios";
import md5 from "js-md5";
import { reactive, ref, toRefs } from "vue";
import { localSet } from "@/utils";
const loginForm = ref(null);
const state = reactive({
  ruleForm: {
    username: "",
    password: "",
  },
  checked: true,
  rules: {
    username: [{ required: "true", message: "账户不能为空", trigger: "blur" }],
    password: [{ required: "true", message: "密码不能为空", trigger: "blur" }],
  },
});
const submitForm = async () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      axios
        .post("/adminUser/login", {
          userName: state.ruleForm.username || "",
          passwordMd5: md5(state.ruleForm.password),
        })
        .then((res) => {
          localSet("token", res);
          window.location.href = "/";
        });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
const resetForm = () => {
  loginForm.value.resetFields();
};
</script>

<style scoped>
.head img[data-v-26084dc2] {
  width: 1000px;
  height: 150px;
  margin-right: 1px;
}
.head[data-v-26084dc2] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
}
.el-input /deep/ .el-input__inner {
  border: 0;
  padding: 0 100px;
}

.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2); */
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-input__wrapper {
  padding: 1px 1px;
}
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>
