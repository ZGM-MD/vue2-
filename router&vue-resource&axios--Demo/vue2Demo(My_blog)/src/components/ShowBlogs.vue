<script>
import axios from 'axios'
export default {
  name:'show-blog',
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created:function(){
    /**使用vue-resource请求HTTP 
    this.$http.get("https://vue2demo-blog-default-rtdb.firebaseio.com/posts.json")
      .then(function(data){
          return data.json()
      })
      .then(function(data){
        var blogsArray = [];
        for(let key in data){
          data[key].id = key;
          blogsArray.push(data[key])
        }
        this.blogs = blogsArray.reverse();//reverse()让获取的数据反转，最后的变成第一个
      })
    */
    //使用axios请求HTTP
    axios.get("/posts.json")
      .then(function(data){
        return data.data;
      })
      .then((data) => {
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray.reverse();//reverse()让获取的数据反转，最后的变成第一个
    })
  },
  computed:{
    filtereBlogs:function(){
      return this.blogs.filter((blog) =>{
        return blog.content.match(this.search)
      })
    }
  }

}

</script>

<template>
  <div id="show-blog">
    <h1>博客总览</h1>
    <!-- <form action="" class="form-inline"> -->
      <div class="input-group has-error">
        <input type="text" placeholder="请输入要搜索的关键字" v-model="search" class="form-control">
        <div class="input-group-addon bg-info" >搜索</div>
      </div>
    <!-- </form> -->
    <div class="single-blog" v-for = "blog in filtereBlogs">
      <blockquote style="border-left:5px solid rgb(220, 20, 60);" >
          <router-link v-bind:to="'/blog/' + blog.id">
            <p class="text-info" style="max-width: 650px;" v-rainbow>{{blog.content}}</p>
          </router-link>
          <footer class="text-right"><cite>发布者：{{blog.author}}</cite></footer>
      </blockquote>
    </div>
    <!-- <div v-for = "blog in filtereBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>
            {{blog.content | snippet}}
        </article>
    </div> -->
  </div>
</template>

<style scoped>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
#show-blog a{
  text-decoration: none;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
