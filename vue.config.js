module.exports = {
  devServer:{
    //代理设置
    proxy:{
      '/mystudent':{
        target:'https://easy-mock.com/mock/5c67d324adf6a5499fb8d351',
        changeOrigin: true
      },
      '/student':{
        target:'http://192.168.25.95:4000',
        changeOrigin: true
      }
    }
  }
}
