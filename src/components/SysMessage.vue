<template>
  <div class="message">
    <div class="message-ico"> <span class="iconfont">&#xe608;</span></div>
    <div>
        <h2>系统消息</h2>
        <h3>您好，欢迎加入「云端书馆」，希望大家…</h3>
        <div class="message-info">
            <span>昨天 23:50</span>
            <span>设计情报局</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.message{
    display: flex;
    justify-content: start;
    &-ico{
      .iconfont{
        color: rgb(7, 201, 201);
        width: 60px;
        line-height: 60px;
      }
        width: 60px;
        height: 60px;
        background-color: #E7F7F4;
        border-radius: 30px;
        text-align: center;
        margin-right: 20px;
    }
    h2{
        font-size: 32px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.8);
        padding-bottom: 12px;
     }
     h3{
        font-size: 28px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.8);
        padding-bottom: 16px;
     }
     &-info{
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.3);
     }
}
</style>