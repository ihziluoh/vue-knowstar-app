<template>
  <div class="like-list-item"> 
    <div class="left-content">
        <img src = "../assets/a.png" />
    </div>
    <div class="right-content">
        <h2>希腊神话交流群</h2>
        <h3>成员2000+</h3>
        <h3>圈内设计服务：《户型布局设计》价格:149...</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.like-list-item{
    height: 132px;
    display: flex;

    .left-content{
        img{
            width: 132px;
            height: 132px;
        }
        width: 132px;
    }
    .right-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 16px;
        h2{
            font-size: 32px;
            font-weight: 600;
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