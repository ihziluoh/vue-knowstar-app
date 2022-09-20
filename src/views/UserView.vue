<template>
  <div class="contair-user">
    
      <div class="top-bar">
        <span>阅读数据</span>
      </div>

      <div class="user-info">
        <div class="content">
          <img src="../assets/a.png"/>

          <div class="name-content">
            <h2>廖尔摩斯丨设计大侦探</h2>
            <h3>已实名认证</h3>
          </div>
        </div>
        <div class="content-right"> > </div>
      </div>
    <div class="user-tools">
        <div>
          <span>15</span>
          <span>足迹</span>
        </div>

        <div>
          <span>2</span>
          <span>问答</span>
        </div>

        <div>
          <span>0</span>
          <span>收藏</span>
        </div>
    </div>

    <div class="lists">
      <div class="list-tool">
        <div class="user-item">
          <div class="user-item-left">  
            <span class="box"></span>
            <span>星球币</span>
          </div>
          <span>></span>
        </div>
        <div class="user-item">
          <div class="user-item-left">  
            <span class="box"></span>
            <span>邀请码</span>
          </div>
          <span>10 ></span>
        </div>
    </div>

    <div class="list-tool">
        <div class="user-item">
          <div class="user-item-left">  
            <span class="box"></span>
            <span>草稿箱</span>
          </div>
          <span>></span>
        </div>

        <div class="user-item">
          <div class="user-item-left">  
            <span class="box"></span>
            <span>回收站</span>
          </div>
          <span>></span>
        </div>

        <div class="user-item">
          <div class="user-item-left">  
          <span class="box"></span>
          <span>设置</span>
          </div>
          <span>></span>
        </div>

        <div class="user-item">
          <div class="user-item-left">  
            <span class="box"></span>
            <span>帮助与客服</span>
          </div>
          <span>></span>
        </div>
    </div>
    </div>
   
  </div>
</template>

<script>
  export default {
      components:{
        // TopBar
      }
  }
</script>

<style lang="scss">

.contair-user{
  height: calc(100vh);
  background-color: #F3F7F8;

  .top-bar{
   
    background-color: white;
   padding: 0 56px;
   padding-top: 78px;
    text-align: right;
    line-height: 96px;
    span{
      font-size: 24px;
      font-weight: normal;
      line-height: 48px;
      padding: 0 16px;
      letter-spacing: 0px;
      color: #55B396;
      border-radius: 24px;
      background: #EDFCF8;
    }
  }
  .user-info{
    background-color: white;
    .content{
      display: flex;
      align-items: center;
    }
    padding: 0 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      border-radius: 72px;
      width: 144px;
      height: 144px;
    }
    .name-content{
      padding-left: 28px;
      // width: 340px;
      height: 84px;
      h2{
        font-size: 34px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.8);
      }
      h3{
        font-size: 28px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.3);
      }
      .content-right{
       
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
.user-tools{
  background-color: white;
  span{
    text-align: center;
    display: block;
    font-size: 28px;
    font-weight: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 0.5);
    &:first-child{
      padding-bottom: 8px;
      font-size: 38px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  
  
  padding: 48px 96px 56px;
  display: flex;
  justify-content: space-between;
}
.lists{
  .list-tool{
    margin-top: 24px;
  }
  
  .user-item{

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 56px;
    &-left{
      display: flex;
      align-items: center;
    }
    .box{
      margin-right: 24px;
      vertical-align: center;
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 12px;
      line-height: 112px;
      background: #F3F7F8;  
    }
    line-height: 112px;
    font-size: 32px;
    font-weight: 600;
    background-color: white;
    // line-height: 40px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>