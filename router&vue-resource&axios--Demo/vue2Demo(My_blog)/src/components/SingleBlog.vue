<template>
    <div id="single-blog">
        <h3 v-rainbow>{{blog.content}}</h3>
        <article>出处：{{blog.title}}</article>
        <div class="message">
            <p>发布者：{{blog.author}}</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
        </div>
        <button class="btn btn-default btn-danger btn-sm" data-toggle="modal" data-target="#myModal" >删除</button>
        <router-link v-bind:to="'/edit/' + id" class="btn btn-sm btn-default btn-info">编辑</router-link>

        <!-- 提示弹窗 start-->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                        <h5 class="modal-title" id="myModalLabel">确认删除吗？</h5>
                    </div>
                    <!-- <div class="modal-body">
                        ...
                    </div> -->
                    <button type="button" class="btn btn-primary affirm" @click="deleteSingleBlog()" data-dismiss="modal" aria-label="Close">确认</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">取消</button>
                    
                </div>
            </div>
        </div>
        <!-- 提示弹窗 end-->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        /**使用vue-resource请求HTTP
        this.$http.get('https://vue2demo-blog-default-rtdb.firebaseio.com/posts/' + this.id + ".json")
            .then(function(data){
                return data.json();
            })
            .then(function(data){
                this.blog = data;
            })
        */
       //使用axios请求HTTP
       axios.get('/posts/' + this.id + ".json")
            .then((data) => {
                this.blog = data.data
            })
    },
    methods:{
        deleteSingleBlog(){
            /**使用vue-resource请求HTTP
            this.$http.delete('https://vue2demo-blog-default-rtdb.firebaseio.com/posts/' + this.id + ".json")
                .then(response =>{
                    this.$router.push({path:'/show'})
                })
            */
           //使用axios请求HTTP
           axios.delete('/posts/' + this.id + ".json")
                .then(response =>{
                            this.$router.push({path:'/show'})
                        })
        }
    }
}
</script>

<style scoped>
h3{
    margin-top: -11px;
    max-width: 650px;
}
article{
    margin-bottom: 20px;
}
#single-blog{
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
    margin-bottom: 20px;
}
.message{
    position: absolute;
    width: 95%;
    height: 20px;
    /* background: rgb(122, 246, 215); */
    /* margin-top: 20px; */
    bottom: 10px;
    
}
.message p{
    float: left;
}
.message ul{
    float: right;
}
.message ul>li{
    float: left;
    margin-left: 19px;
}
button{
    position: absolute;
    right: 10px;
    top: 10px;
}
a{
    position: absolute;
    right: 10px;
    top: 43px;
}
.affirm{
    margin-right: 64px;
}
</style>