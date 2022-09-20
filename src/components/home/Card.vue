<template>
    <div class="card">
        <img src="http://api.btstu.cn/sjtx/api.php"/>
        <h2>设计大侦探</h2>
        <div class="card-user-info">
            <span>廖庆 Joseph</span>
            <img src="http://api.btstu.cn/sjtx/api.php" />
        </div>
    </div>
 
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .card{
        width: 312px;
        img{
            background-color: rgb(236, 236, 236);
            width: 312px;
            height: 312px;
            object-fit: cover;

        }
        h2{
            padding: 16px 0 4px 0;
            font-size: 30px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.8);
        }
        &-user-info{
          display: flex;
          justify-content: space-between;
            font-size: 24px;
            font-weight: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.5);
          
            img{
               
                width: 32px;
                height: 32px;
                border-radius: 16px;
             
            }
        }

    }
</style>