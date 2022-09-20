<template>
  <div class="theme-list-item">
    <div class="theme-list-item-content"> 
      <p>#80天大脑强化 Day1 《断更四年，这次我真的不想半途而废》把一篇公众号</p>
      <img src="../assets/a.png"/>
    </div>
    <div class="theme-list-item-author">凌子丨黑珍珠</div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.theme-list-item{
  border-top: 1px solid #F7F7F7;;
  // border-bottom: 1px solid #F7F7F7;;
  padding: 40px 0px;
  &-author{
    margin-top: 16px;
    font-size: 24px;
    font-weight: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 0.5);
  }
  &-content{
      display: flex;
      justify-content: space-between;
      height: 122px;
      img{
        width:122px;
        height: 122px;
      }
      p{
        font-size: 32px;
        font-weight: normal;
        line-height: 44px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.8);
        width: 500px;

      }

  }
}
</style>