<template>
  <div class="login-container">
    <div class="login-inner">
      <img src="@/assets/common/logo.png" alt="" class="logo">
      <el-form ref="loginForm" class="login-form" auto-complete="on" label-position="left" :model="loginForm" :rules="rules">

        <!-- 手机号 -->
        <el-form-item label="" prop="loginName">
          <span class="svg-container">
            <svg-icon icon-class="phone" />
          </span>
          <el-input v-model="loginForm.loginName" placeholder="" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="" prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input v-model="loginForm.password" :type="passwordType" placeholder="" />
          <span class="svg-container" @click="showPwd">
            <svg-icon :icon-class="passwordType==='password'?'eye':'eye-open'" />
          </span>
        </el-form-item>
        <!-- 验证码框 -->
        <el-form-item label="" class="verification-item" prop="code">
          <span class="svg-container">
            <svg-icon icon-class="safe" />
          </span>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" class="verification-ipt" />
          <div class="verification" @click="getCode">
            <img :src="$store.state.user.codeData.codeImg" alt="">
          </div>
        </el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" class="loginBtn" @click="login">登录</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
import { validUserName } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const userNameValid = (rules, value, callback) => {
      if (validUserName(value)) {
        callback()
      } else {
        callback(new Error('用户名格式不正确'))
      }
    }
    return {
      loading: false,
      passwordType: 'password',
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      rules: {
        loginName: [
          {
            required: true,
            message: '用户名必填',
            trigger: 'blur'
          },
          {
            validator: userNameValid,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码必填',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 16,
            message: '密码格式不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    vuexClientToken() {
      return this.$store.state.user.codeData.random
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'
    },
    async getCode() {
      await this.$store.dispatch('user/asyncGetCode')
    },
    async login() {
      try {
        this.getCode()
        this.loginForm.clientToken = this.vuexClientToken
        await this.$refs.loginForm.validate()
        this.loading = true
        await this.$store.dispatch('user/asyncLogin', this.loginForm)
        this.loginForm.code = ''
        this.$router.push('/')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.login-inner{
  position: absolute;
  top:50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  width: 518px;
  height: 388px;
  padding: 76px 35px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#999;

.login-container {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-image: url('~@/assets/common/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
 .verification-ipt{
  width: 64%;
 }
 .loginBtn{
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg,#2e50e1,#6878f0);
 }
 .el-form-item {
    border: 1px solid #e2e2e2;
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
  }
  .verification{
    display: inline-block;
    vertical-align: middle;
    width: 130px;
    height: 50px;
    background-color: pink;
  }
  .logo{
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 16px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
