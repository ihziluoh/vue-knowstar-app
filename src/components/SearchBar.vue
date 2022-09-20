<template>
    <div class="search">
        <span class="iconfont">&#xe608;</span>
        <input type="text" placeholder="搜索星球、用户或内容" />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .search{
        position: relative;
        span{
            position: absolute;
            left: 24px ;
            width: 24px ;
            height: 24px ;
            line-height: 80px;
        }
        input{
            border: none;
            padding-left: 68px;
            width: 100%;
            border-radius: 8px;
            background: #F5F6F6;
            line-height: 80px;
            font-size: 28px;
            font-weight: normal;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.3);
        }
    }

</style>