
<template>
  <div >
    <TopBar name="发现"/>
    <div class="contair">
      <QaList/>
      <LikeList/>
      <img class="adv" src="../assets/a.png" />
      <ThemeList/>

      <div class="rank">
        <div class="rank-top">
          <h2>星球财富周榜</h2>
          <h3>每小时更新一次丨查看完整榜单</h3>
        </div>
        <div class="rank-content">
          <ul>
            <li>1. 抖音内参</li>
            <li>2. 树泽的成长星球</li>
            <li>3. 以琳设计</li>
          </ul>
        </div>
      </div>
      <CateTabView/>
    </div>
  
  </div>
</template>

<script>

import TopBar from "../components/TopBar.vue"
import QaList from "../components/QaList.vue"
import LikeList from "../components/LikeList.vue"
import ThemeList from "../components/ThemeList.vue"
import CateTabView from "../components/CateTabView.vue"
export default {
    components:{
      CateTabView,
      ThemeList,
      TopBar,
      LikeList,
      QaList,
    }
}
</script>

<style lang="scss">
  .contair{
    padding: 0 40px;
    padding-bottom: 200px;

    .rank{
      margin-bottom: 54px;
      height: 384px;
      
     
      &-top{
        border-radius: 16px 16px 0px 0px;
        background: #3F3F3F;
        padding:32px;
        h2{
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: 0px;
          color: #FFFFFF;
        }
        h3{
          font-size: 24px;
          font-weight: normal;
          line-height: 40px;
          letter-spacing: 0px;
          color: #FFFFFF;
        }
      }
      &-content{
        height: 232px;
        border-radius: 0px 0px 16px 16px;
        background: #F5F6F6;
        padding:  32px 40px;
        ul{
          li{
            padding-bottom:16px;
            font-size: 30px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
            list-style-type: none;
          }
        }
      }
    }
  }
  .adv{
        border-radius: 20px;
        margin-top: 72px;
        width: 100%;
        height: 272px;
        object-fit: cover;
    }
    
</style>