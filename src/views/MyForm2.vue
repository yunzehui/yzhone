<template>
  <div>
    <el-form :model="form" :rules="rules">
      <el-form-item prop="name">
        <!-- 用户名 -->
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="pw">
        <!-- 密码 -->
        <el-input v-model="form.pw"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    //   自定义正则校验
    let myfn = function (rule, value, callback) {
      console.log(rule, value);
      let rg = /\w(2,6)/;
      if (!rg.test(value)) {
        return callback(new Error("填写有误"));
      }
    };

    return {
      form: {
        name: "张三2",
        pw: "123456",
      },
      rules: {
        name: [{ validator: myfn, trigger: "blur" }],
        pw: [],
      },
    };
  },
};
</script>

<style>
</style>