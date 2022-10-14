<script>
import axios from 'axios'
export default {
  name:'add-blog',
  data(){
    return{
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["ZGM","MING","M-D"],
      submit:false
    }
  },
  methods:{
    post:function(){
      /**使用vue-resource请求HTTP 
      this.$http.post("https://vue2demo-blog-default-rtdb.firebaseio.com/posts.json",this.blog)
        .then(function(){
          // console.log(data)
          this.submit = true
        })
      */
     //使用axios请求HTTP
     axios.post("/posts.json",this.blog)
        .then((data) => {
          this.submit = true;
        })
    }
  },
  beforeCreate:function(){
    $('#app').css('background','rgb(233,233,233)')
  },
  beforeDestroy:function(){
    $('#app').css('background','rgb(253, 158, 158)')
  }
}

</script>

<template>
  <div id="add-blog">
    <h1>写博客</h1>
    <form v-if="!submit">
      <div class="form-group">
        <label>出处：</label>
        <input type="text" v-model="blog.title" class="form-control">
      </div>

      <div class="form-group">
        <label>内容：</label>
        <textarea v-model="blog.content" class="form-control"></textarea>
      </div>

      <div class="from-group">
        <label for="" class="checkbox-inline">
          <input type="checkbox" value="电影" v-model="blog.categories" >电影
        </label> 
        <label for="" class="checkbox-inline">
          <input type="checkbox" value="电视剧" v-model="blog.categories" >电视剧
        </label>
        <label for="" class="checkbox-inline">
          <input type="checkbox" value="特摄" v-model="blog.categories" >特摄
        </label>
        <label for="" class="checkbox-inline">
          <input type="checkbox" value="动漫" v-model="blog.categories" >动漫
        </label>
        <label for="" class="checkbox-inline">
          <input type="checkbox" value="其它" v-model="blog.categories" >其它
        </label>
      </div>

      <label class="autor">发布者：</label>
      <select v-model="blog.author" class="form-control">
        <option v-for = "author in authors">{{author}}</option>
      </select>
      
      <button v-on:click.prevent="post" class="btn btn-default btn-block btn-danger">添加博客</button>
      
    </form>
    <div v-if="submit">
      <hr>
      <h3>您的博客已发送成功</h3>
    </div>

  </div>

  
  
</template>

<style scoped>
#add-blog{
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}
.autor,button{
  margin-top: 20px;
}

</style>
