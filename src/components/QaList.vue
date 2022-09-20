<template>
    <div class="qa-list">
        <div class="qa-list-top">
            <span>热点问题 · 星空问答</span>
            <span>查看更多 ></span>
        </div>
        <QaListItem class="qa-list-item" v-for="i in 3" :key="i" />
    </div>
 
</template>

<script>
    import QaListItem from './QaListItem.vue';
export default {
    components:{
        QaListItem
    }
}
</script>

<style lang="scss">
    .qa-list{
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
.qa-list-item{
    margin:24px 0;
}
</style>