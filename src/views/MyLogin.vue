<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>SEEC3后台管理系统</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示</p>
      <p class="tip">未登录过的用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户名格式有误"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码格式有误"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      rules: {
        user: { validator: userfn, trigger: "blur" },
        pw: { validator: pwfn, trigger: "blur" },
      },
      newdebouncefn: null,
    };
  },
  methods: {
    submitfn() {
      //   this.loginfn();
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", {
        user: user,
        pw: pw,
      });
      console.log(data);

      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        //   如果请求成功，将token存入
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "HomeIndex" });
          },
        });
      }
    },
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 2000);
  },
};
</script>

<style scoped>
.login {
  background: #324057;
  width: 100vw;
  height: 100vh;
}
.title {
  width: 370px;
  position: absolute;
  left: 50%;
  margin-left: -110px;
  top: -130px;
}
.login .title h3 {
  color: #fff;
}
.myform {
  width: 370px;
  height: 260px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 20px 60px;
}
.btn {
  width: 100%;
}
.tip {
  font-size: 12px;
  color: red;
  text-align: center;
}
</style>