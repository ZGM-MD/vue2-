<script>
import Aleat from './Aleat.vue'
export default {
  name:"home",
  data(){
    return{
      messages:[],
      alert:"",
      search:""
    }
  },
  components:{
    Aleat
  },
  methods:{
    fetchMessages(){
      this.$http.get("http://localhost:3000/users")
        .then((response) =>{
          this.messages = response.data
        })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert =this.$route.query.alert
    }
    this.fetchMessages()
  },
  updated(){
    this.fetchMessages()
  },
  computed:{
    filtereMessages:function(){
      return this.messages.filter((message) =>{
        return message.name.match(this.search)
      })
    }
  }
}
</script>

<template>
  <div class="customes container">
      <Aleat v-if="alert" v-bind:message="alert"></Aleat>
      <h1>用户管理系统</h1>
      <hr>
      <div class="form-group">
          <input  v-model="search" type="text" placeholder="请输入搜索内容" class="form-control">
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <td>姓名</td>
            <td>电话</td>
            <td>邮箱</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in filtereMessages">
            <td>{{message.name}}</td>
            <td>{{message.phone}}</td>
            <td>{{message.email}}</td>
            <td>
              <router-link v-bind:to="'/Particulars/'+message.id" class="btn btn-default btn-warning btn-xs">详情</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>
#home{
  margin-top: 27px;
}
</style>
