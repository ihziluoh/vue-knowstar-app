<template>
 <div>
    <div class="cate-tab">
        <span class="select">全部</span>
        <span>行业交流</span>
        <span>编程开发</span>
        <span>设计美学</span>
        <span class="iconfont">&#xe632;</span>
    </div>
    <CateItem v-for="i in 5" :key="i"/>
</div>

</template>

<script>
import CateItem from './CateItem.vue';
export default {
    components:{
        CateItem
    }
    
}
</script>

<style lang="scss">
.cate-tab{
    padding-bottom: 22px;
    position: relative;
    .iconfont{
        text-align: center;
        width: 60px;
        margin-right:0 ;
        position: absolute;
        right: 0;
        background-color: #ccc;
        color: white;
    }
    span{
        display: inline-block;
        // height: 60px;
        margin-right:16px ;
        padding: 0 20px;
        font-size: 28px;
        font-weight: 600;
        line-height: 60px;
        letter-spacing: 0px;
        
        height: 60px;
        border-radius: 8px;
        color: rgba(0, 0, 0, 0.5);
        background: #F5F6F6;
        &.select{
            color: #FFFFFF;
            background: #17B99A;
        }
       
    }

}
</style>