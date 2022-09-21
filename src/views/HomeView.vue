

<template>
 
    <div class="main">
      <TopBar name="首页"/>
      <SearchBar/>
      <div class="cards" >
          <card class="cards-item" v-for="i in 5" :key="i" />
      </div>
    
    </div>
</template>


<script >
  import SearchBar from "../components/SearchBar.vue"
  import TopBar from "../components/TopBar.vue"
  import Card from "../components/home/Card.vue"
  export default {
    components:{
      SearchBar,
      Card,
      TopBar
    },
    data(){
      return {}
    },created(){
    

      
    },mounted(){
      
       

    }
  }
// import TheWelcome from '../components/TheWelcome.vue'
</script>
<style lang="scss">
.main{
  padding: 0 40px;
  
  .cards{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    &-item{
      padding-top: 40px;
    }
  
    
  }
}
</style>
