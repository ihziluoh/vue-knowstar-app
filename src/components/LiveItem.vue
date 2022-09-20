<template>
  <div class="live">
    <div class="live-ico"> <img src="http://api.btstu.cn/sjtx/api.php"></div>
    <div class="live-content">
        <h3><label>啊哈哈~：</label>#每周模仿训练连接线其实不错</h3>
        <p>纯享版-想阅读致敬！微信读书产品设计策略微信读书产品设计策略…</p>
        <div class="live-content-course">第二学期第37期…习(皇皇).pptx</div>
        <div class="live-content-imgs">
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
            <img src="../assets/a.png" />
        </div>
        <div class="live-content-info">
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

.live{
    border-top: 1px solid #F7F7F7;
    
    padding: 40px 0;
    display: flex;
    justify-content: start;
    &-ico{
        margin-right: 20px;
        width: 60px;
        img{
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }
    } 
    &-content{
        h3{
            font-size: 32px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
            label{
                font-weight: 600;
            }
           
        }
        p{
            padding-top: 12px;
            padding-bottom: 24px;
            font-size: 32px;
            font-weight: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
        }
        &-course{
            padding-left: 40px;
            display: block;
            line-height: 88px;
            font-size: 28px;
            font-weight: normal;
            letter-spacing: 0px;
            border-radius: 8px;
            background: #F5F6F6;
            color: rgba(0, 0, 0, 0.5);
        }
        &-imgs{

            padding-top:24px;
            margin: 0 -3.5px;
            display: flex;
            flex-flow: wrap;
            img{
                margin: 3.5px;
                width: 192px;
                height: 192px;
            }
        }
        &-info{
            padding: 24px 0px 40px 0px;
            display: flex;
            justify-content: space-between;

            font-size: 24px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.3);
        }
    }
}
</style>