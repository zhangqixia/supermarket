<template>
    <div v-if="Object.keys(commontinfo).length !== 0" class="detailrate">
        <div class="describe">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="userinfo">
            <span class="userimg"><img :src="commontinfo.user.avatar" alt=""/></span>
            <span class="username">{{commontinfo.user.uname}}</span>
        </div>
        <div class="content">{{commontinfo.content}}</div>
        <div class="times">
            <span>{{commontinfo.created | showDate}}</span>
            <span>{{commontinfo.style}}</span>
        </div>
        <div class="info-images">
            <img v-for="(item,index) in commontinfo.images" :src="item" :key="index"/>
        </div>
        <div class="tuijian">热门推荐</div>
    </div>
</template>

<script>
import { formatDate } from "common2/units.js";
export default {
    name: 'DetailRate',
    props: {
        commontinfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(value){
        //1.现将时间戳转换为时间对象 --> *1000转换成毫秒
            const date = new Date(value * 1000)
        //2.将date格式化
        return formatDate(date,'yyyy-MM-dd HH:mm:ss')
        }
    }
}
</script>

<style>
.detailrate{
    margin-bottom: 5px;
}
.describe{
    border-bottom: 2px solid #f2f5f8;
    color: #333;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
}
.userinfo{
    display: flex;
    border-bottom: 1px solid #f2f5f8;
}
.userinfo .userimg img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.userinfo .username{
    line-height: 40px;
    color: #333;
    margin-left: 10px;
    font-size: 15px;
}
.content{
    padding: 10px 10px;
    color: #333;
    font-size: 14px;
    border-bottom: 1px solid #f2f5f8;
}
.times{
    margin:5px 10px;
    color: #999;
    font-size: 12px;
}
.times span:nth-child(2){
    margin-left: 10px;
}
.info-images img{
    width: 100px;
    height: 100px;
}
.info-images{
    border-bottom: 5px solid #f2f5f8;
}
.tuijian{
    color: #ff5777;
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
}
</style>