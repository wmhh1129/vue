<template>
  <div class="container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
      <el-form-item label="用户" prop="username" style="width: 250px">
        <!--<span class="icon-container">-->
        <!--<i class="iconfont icon-legend"></i>-->
        <!--</span>-->
        <el-input type="password" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      const usernameVerify = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          if (this.loginForm.checkPass !== '') {
            // this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      const passwordVerify = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (value !== this.loginForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: usernameVerify, trigger: 'blur'}
          ],
          password: [
            {validator: passwordVerify, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (x) {
        console.log(x)
      }
    }
  }
</script>

<style scoped type="text/scss">
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f1f1f1;
    justify-content: center;
    align-items: center;

    .icon-container {
      padding: 6px 5px 6px 15px;
      color: gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
  }
</style>
