<template>
  <div class="navbar">
    <img src="~@/assets/common/logoone.png" alt="" class="logoone">
    <div class="right-menu">
      <el-row>
        <el-col :span="5">
          <div class="userImgBox">
            <img src="~@/assets/common/logo.png" alt="" class="userImg">
          </div>
        </el-col>
        <el-col :span="14">
          <div class="text"><span>欢迎你，admin</span></div>
        </el-col>
        <el-col :span="5">
          <div class="exit">
            <span>退出</span>
            <svg-icon icon-class="down" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: url(~@/assets/common/backgroundone.png);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .logoone{
    position: relative;
    top:4px;
    width: 88px;
    margin: 6px 0 0 15px;
  }
  .right-menu{
    margin-right: 24px;
    width: 240px;
    height: 100%;
    // background-color: pink;
    color: #fff;
    .text{
      height: 60px;
      line-height: 60px;
    }
    .exit{
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .el-row{
      height: 100%;
    }
    .el-col{
      height: 100%;
    }
    .userImgBox{
      height: 100%;
      line-height: 60px;
      .userImg{
        vertical-align: middle;
        width: 35px;
        height: 35px;
      }
    }
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
