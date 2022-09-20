<template>
  <div class="cate-item">
        <img src="../assets/a.png"/>
        <div class="cate-item-content">
            <h2>美与艺术</h2>
            <h3>智享圈主编丨4800+人加入学习</h3>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cate-item{
    padding: 32px 0;
    display: flex;
    img{
        width: 108px;
        height: 108px;
        border-radius: 8px;
    }
    &-content{
        padding-left: 24px;
        h2{
            padding: 6px 0px 16px 0px;
            font-size: 32px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
        }
        h3{
            font-size: 26px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.5);
        }
    }

}
</style>