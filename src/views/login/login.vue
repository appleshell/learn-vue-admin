<template>
    <div class="loginContainer">
        <div class="loginFrom">
            <h2>learn-admin</h2>
            <el-form :model="loginForm">
                <el-form-item>
                    <el-input v-model="loginForm.userName" placeholder="请输入登录账号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.password" type="password" placeholder="请输入登录密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          loginForm:{
            userName:'',
            password:''
          }
        }
      },
      created(){},
      methods:{
        login(){
          this.$store.dispatch('Login',this.loginForm).then(res => {
            if(res.code === 0){
              this.$router.push('/')
            }
          }).catch(err => {
            console.log(err)
            this.$message.error(err)
          })
        }
      }
    }
</script>

<style lang="scss">
    .loginContainer{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #56bc8a;
        .loginFrom{
            background-color: rgba(255,255,255,.3);
            padding:12px 24px;
            text-align: center;
            width:500px;
            border-radius: 4px;
            h2{
                font-size:36px;
                color:#f1f1f1;
            }
        }
    }
</style>
