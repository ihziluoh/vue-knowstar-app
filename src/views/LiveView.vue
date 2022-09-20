<template>
  <div class="contair">
    <TopBar name="动态"/>
    <SysMessage />
    <div class="lives">
      <LiveItem v-for="i in 5" :key="i" />
    </div>
   
  </div>
</template>

<script>
  import SysMessage from "../components/SysMessage.vue"
  import LiveItem from "../components/LiveItem.vue"
  import TopBar from "../components/TopBar.vue"
  export default {
      components:{
        TopBar,
        SysMessage,
        LiveItem
      }
  }

</script>

<style lang="scss" >
  .contair {
     padding:0 40px;
  }
  .lives{
    margin-top: 40px;
  }
</style>