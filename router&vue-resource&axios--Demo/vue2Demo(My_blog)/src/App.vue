<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import BlogHeader from './components/BlogHeader.vue'
export default {
  name:'app',
  data(){
    return{
      
    }
  },
  methods:{

  },
  components:{
    AddBlog,ShowBlogs,BlogHeader
  }
}

</script>

<template>
  <div id="app" class="container">
    <!-- <add-blog></add-blog> -->
    <!-- <ShowBlogs></ShowBlogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app{
  background: rgb(253, 158, 158);
  padding-left: 0px;
  padding-right: 0px;
}
</style>
