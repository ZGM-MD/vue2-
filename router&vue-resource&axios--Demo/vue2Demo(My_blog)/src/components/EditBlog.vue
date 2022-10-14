<script>
import axios from 'axios';

export default {
  name:'add-blog',
  data(){
    return{
        id:this.$route.params.id,
      blog:{},
      authors:["ZGM","MING","M-D"],
      submit:false
    }
  },
  methods:{
    put:function(){
      /**使用vue-resource请求HTTP
      this.$http.put("https://vue2demo-blog-default-rtdb.firebaseio.com/posts/" + this.id + ".json",this.blog)
        .then(function(data){
          this.submit = true
        })
        .then(response =>{
            this.$router.push({path:'/show'})
        })
      */
     //使用axios请求HTTP
     axios.put("/posts/" + this.id + ".json",this.blog)
        .then((data) => {
              this.submit = true
        })
        .then(response =>{
            this.$router.push({path:'/show'})
        })
    }
  },
  created(){
    /**vue-resource请求HTTP 
    this.$http.get("/posts/" + this.id + ".json")
            .then(response => {
                this.blog = response.body;
            })
    */
   //axios请求HTTP
    axios.get("/posts/" + this.id + ".json")
        .then((data) => {
          this.blog = data.data
        })
  }
}

</script>

<template>
  <div id="add-blog">
    <h1>编辑博客</h1>
    <form v-if="!submit">
      <div class="form-group">
        <label>主题：</label>
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

      <label class="autor">作者：</label>
      <select v-model="blog.author" class="form-control">
        <option v-for = "author in authors">{{author}}</option>
      </select>
      
      <button v-on:click.prevent="put" class="btn btn-default btn-block btn-danger">保存博客</button>
      
    </form>
    <div v-if="submit">
      <hr>
      <h3>您的博客已修改成功</h3>
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
