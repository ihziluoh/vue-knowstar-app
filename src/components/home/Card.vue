<template>
    <div class="card">
        <img src="../../assets/a.png"/>
        <h2>{{posname}}</h2>
        <div class="card-user-info">
            <span>{{name}}</span>
            <img src="../../assets/a.png" />
        </div>
    </div>
 
</template>

<script>
import {name,posname} from "../../stores/data"
import axios from "axios"

export default {
    data(){
        return {
            user_ico:'',
            imgurl:'',
            name:name(),
            posname:posname()
        }
    },
    mounted(){
    },

    created(){
        // let self=this
        // axios.get("https://api.btstu.cn/sjbz/api.php?lx=dongman&format=json").then(function (response) {
        //     console.log(response.data.imgurl);
        //     self.imgurl=response.data.imgurl
        // })
        // axios.get("https://api.btstu.cn/sjtx/api.php?lx=c1&format=json").then(function (response) {
        //     self.user_ico=response.data.imgurl
        // })
    }
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