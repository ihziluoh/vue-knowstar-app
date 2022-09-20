<template>
   <div class="title">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    props:['name']
}
</script>

<style lang="scss">
    .title{
        h1{
            padding-top: 78px;
            text-align: center;
            line-height: 96px;
            font-family: PingFangSC-Semibold;
            font-size: 36px;
            font-weight: 600;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
        }
    }
</style>