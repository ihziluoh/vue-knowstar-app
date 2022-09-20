<template>
  <div class="theme-list">
    <div class="theme-list-top">
        <span>精华主题</span>
        <span>换一批</span>
    </div>
    <ThemeListItem v-for="i in 3" :key="i"/>
  </div>
</template>

<script>
import ThemeListItem from "./ThemeListItem.vue"
export default {
    components:{
        ThemeListItem
    }
}
</script>

<style lang="scss">
.theme-list{
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