module.exports = {
  devServer:{
    host:"localhost",
    port:8080,
    https:false,
    open:true,
    proxy:{
      "/api":{
        target:"http://localhost:4000",
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  lintOnSave:false,
}