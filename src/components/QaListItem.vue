<template>
  <div class="qa-list-item">
    <div class="qa-list-item-top">
        <span class="tag">编辑推荐</span>
        <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="32" height="32" viewBox="0 0 32 32"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough" transform="matrix(0,1,-1,0,31.999999284744263,-25.59999918937683)"><g style="opacity:0;mix-blend-mode:passthrough"><rect x="28.799999237060547" y="3.200000047683716" width="25.600000381469727" height="25.600000381469727" rx="0" fill="#000000" fill-opacity="1"/></g><g style="mix-blend-mode:passthrough"><path d="M51.55555457668304,23.111111211776734C51.12885457668304,23.111111211776734,50.702254576683046,22.968911211776735,50.417754576683045,22.684411211776734L42.59555457668304,13.440001211776734C42.311154576683045,13.297781211776734,42.168854576683046,13.155551211776734,41.742254576683045,13.155551211776734C41.59995457668305,13.155551211776734,41.173354576683046,13.297781211776734,41.03115457668304,13.440001211776734L32.78222457668304,22.54221121177673C32.213334576683046,23.111111211776734,31.359994576683043,23.111111211776734,30.791110576683046,22.684411211776734C30.222221576683044,22.115511211776735,30.222221576683044,21.262211211776734,30.648888576683046,20.69331121177673L38.89777457668305,11.591111211776733C39.608884576683046,10.737778211776734,40.74665457668304,10.311111211776733,41.88445457668304,10.311111211776733C43.022254576683046,10.311111211776733,44.017754576683046,10.880000211776734,44.87115457668305,11.733331211776733L52.69335457668305,20.835511211776733C53.26225457668305,21.404411211776733,53.11995457668304,22.257811211776733,52.55115457668305,22.826711211776733C52.266654576683045,22.968911211776735,51.83995457668304,23.111111211776734,51.55555457668304,23.111111211776734Z" fill="#000000" fill-opacity="0.20000000298023224"/></g></g></g></svg></span>
    </div>
    <p>更高的工资和更有前景的学习机会，应该选择哪个呢？</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .qa-list-item{
    padding: 24px;
    background-color: #FAFBFB ;
    border-radius: 16px;
    &-top{
        .tag{
            line-height: 36px;
            border-radius: 4px;
            display: inline-block;
            font-size: 20px;
            font-weight: normal;
            // line-height: 36px;
            // height: 36px;
            letter-spacing: 0px;
            color: #17B99A;
            padding: 0px 12px;
            background: #E7F8F4;
        }
        span{
            font-size: 24px;
           
            svg{
                width: 32px;
            }
        }
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    p{
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.8);
    }

 }
</style>