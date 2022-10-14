<script>
export default {
    name: "app"
    // components: { Home ,AddUser,Details}
}
</script>

<template>
  <div id="app">
    <div class="header">
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand">用户管理系统</span>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/details">关于我们</router-link></li>
            <li><router-link to="/add-user">添加用户</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app>.header{
  width: 100%;
  height: 50px;
  background: #f9f7fa;
}
#app>div>ul{
  margin: 0 auto;
  width: 1135px;
  height: 100%;
}
#app>div>ul>li{
  float: left;
  font-size: 20px;
  line-height: 50px;
  margin-right: 30px;

}
a{
  color: #000;
  text-decoration: none;
}
a:hover{
  color: rgb(255, 0, 0);
  font-weight: bolder;
  text-decoration: none;
}
.router-link-active{
  text-decoration: none;
  color: #000;
}
#app>div>ul>li:not(#app>div>ul>li:nth-child(1)){
  font-size: 16px;
}
</style>
