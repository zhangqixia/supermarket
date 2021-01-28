<template>
  <div v-if="Object.keys(goods).length !== 0" class="detailbase">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span>{{goods.newprice}}</span>
          <span>{{goods.oldprice}}</span>
          <span>{{goods.discount}}</span>
      </div>
      <div class="info-columns">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[0].name}}</span>
      </div>
      <!-- <div class="info-services" v-if="goods.services.length<4">
          <span><img :src="goods.services[1].icon"/>{{goods.services[1].name}}</span>
          <span><img :src="goods.services[2].icon"/>{{goods.services[2].name}}</span>
      </div> -->
      <div class="info-services">
          <span><img :src="goods.services[goods.services.length-2].icon"/>{{goods.services[goods.services.length-2].name}}</span>
          <span><img :src="goods.services[goods.services.length-1].icon"/>{{goods.services[goods.services.length-1].name}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailBaseinfo',
    data() {
        return {
            
        }
    },
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    created(){
        
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.detailbase{
    padding: 0 4px;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color:#000000;
    font-size: 16px;
    padding-top: 10px;
}
.info-price{
    padding-top:12px;
    position: relative;
}
.info-price :nth-child(1){
    color: #ff5777;
    font-size: 20px;
}
.info-price :nth-child(2){
    color: #999;
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 3px;
}
.info-price :nth-child(3){
    background-color: #ff5777;
    color: #ffffff;
    font-size: 12px;
    padding: 3px;
    border-radius: 10px;
    position: absolute;
    top: 2px;
    margin-left: 3px;
}
.info-columns{
    color: #999999;
    font-size: 14px;
    text-align: center;
    padding-top:12px;
    border-bottom: 2px solid #f2f5f8;
}
.info-columns :nth-child(1){
    float: left;
}
.info-columns :nth-child(3){
    float: right;
}
.info-services{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 14px 0px;
}
.info-services img{
    width: 13px;
    height: 13px;
    margin-right: 1px;
}
</style>