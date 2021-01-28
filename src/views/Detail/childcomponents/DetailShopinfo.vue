<template>
  <div  v-if="Object.keys(shops).length !== 0" class="shopinfo">
      <div class="shops">
          <span class="logo"><img :src="shops.logo"/></span>
          <span class="name"><p>{{shops.name}}</p></span>
      </div>
      <div class="scroe">
          <div class="scroe-left">
              <div class="sells">
                  <div class="sells-count">{{shops.sells | sellCountFilter}}</div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="goodcount">
                  <div class="goods-count">{{shops.goodcount}}</div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="scroe-center"></div>
          <div class="scroe-right">
              <table>
                  <tr v-for="(item,index) in shops.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="textgreen" :class="{'textred' : item.isBetter}">{{item.score}}</td>
                      <td class="backgroundgreen" :class="{'backgroundred' : item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="scroe-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailShopinfo',
    props: {
        shops: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    //过滤器
    filters: {
        sellCountFilter: function(value){
            if(value < 10000) return value;
            return (value/10000).toFixed(1) + '万'
        }
    },
    data() {
        return {
            csoss: 100
        }
    }
}
</script>

<style>
.shopinfo{
    border-bottom: 3px solid #f2f5f8;
}
.shops{
    padding: 15px 10px;
    border-bottom: 1px solid #f2f5f8;
    display: flex;
}
.shops .logo img{
    width: 50px;
    height: 50px;
    border-radius: 25px; 
}
.shops .name{
    margin-left: 10px;
    line-height: 50px;
    color: #000000;
}
.scroe{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f5f8;
}
.scroe-left{
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    color: #000;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2); 
}
.sells-count, .goods-count{
    font-size: 18px;
}
.sells-text, .goods-text{
    font-size: 12px;
    margin-top: 10px;    
}
.scroe-right{
    font-size: 13px;
    color: #333;
}
.scroe-right table{
    width: 120px;
    margin-left: 20px;
}
.scroe-right table td{
    padding:5px 0;
}
.textgreen{
    color: #5ea732;
}
.textred{
    color: #f13e3a;
}
 table .backgroundgreen span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
}
table .backgroundred span{
    background-color: #f13e3a;
}
.scroe-bottom{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 2px;
}
.enter-shop{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
</style>