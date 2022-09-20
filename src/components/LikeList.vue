<template>
  <div class="like-list">
    <div class="like-list-top">
        <span>你可能感兴趣</span>
        <span>换一批</span>
    </div>
    <LikeListItem class="like-list-item" v-for="i in 4" :key="i" />
    
  </div>
</template>

<script>
    import LikeListItem from './LikeListItem.vue';
export default {
    components:{
        LikeListItem
    }
}
</script>

<style lang="scss">
    .like-list-item{
        margin-top: 32px;
    }
.like-list{
    // 
    
    margin-top: 32px;
    &-top{
        margin: 24px 0px 8px 0px;
        height: 40px;
        font-size: 24px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #17B99A;

        :first-child{
            font-size: 32px;
            font-weight: 600;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);

        }
        display: flex;
        justify-content: space-between;
    }
}
</style>