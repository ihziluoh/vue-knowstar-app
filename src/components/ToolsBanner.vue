<template>
    <div class="tools">
        <div class="tools-item">
            <RouterLink to="/">
                <span class="iconfont">&#xe62e;</span>
                星球
            </RouterLink>
        </div>
        <div class="tools-item"> 
            <RouterLink to="/live">
                <span class="iconfont">&#xe63c;</span>
                动态
            </RouterLink>
        </div>
           
        <div class="tools-item">
            <RouterLink to="/find">
                <span class="iconfont">&#xe632;</span>
                发现
            </RouterLink>
        </div>
        <div class="tools-item">
            <RouterLink to="/user">
            <span class="iconfont">&#xe631;</span>
            我
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tools:[
                {
                    "ico":"&#xe62e;",
                    "name":"星球",
                    "link":"/"
                },
                {
                    "ico":"&#xe63c;",
                    "name":"动态",
                    "link":"/live"
                },
                {
                    "ico":"&#xe632;;",
                    "name":"发现",
                    "link":"/find"
                },
                {
                    "ico":"&#xe631;;",
                    "name":"我",
                    "link":"/user"
                }
            ]
        
        }
    }
        
}
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'iconfont';
        src: url('../assets/iconfont.ttf') format('truetype');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 40px;
        line-height: 40px;
        display: block;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .tools{
        a{
            color: dimgray;
            font-size: 24px;
        }
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
        background-color: white;
        position:fixed;
        bottom: 0;
        height: 140px;
        width: 100%;
        &-item{
            span{
                color: dimgray;
            }
            color: darkgrey;
            flex: 1;
            text-align: center;
            // align-self: center;
        }
    }
</style>