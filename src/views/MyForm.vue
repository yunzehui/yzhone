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
    return {
      form: {
        name: "张三",
        pw: "123456",
      },
      rules: {
        name: [
          {
            type: "string",
            required: true,
            pattern: /zhangsan/,
            message: "用户名错误",
          },
        ],
        pw: [{ trigger: "blur" }],
      },
    };
  },
};
</script>

<style>
</style>