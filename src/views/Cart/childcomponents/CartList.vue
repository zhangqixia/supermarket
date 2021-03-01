<template>
  <div class="cartlist-item">
      <div class="item-selector">
          <!-- <check-button @checkbtnclick="checkchange" :value="product.checked"></check-button> -->
          <check-button :value="product.ischecked" @click.native="checkedclick"></check-button>
      </div>
      <div class="item-img">
          <img :src="product.topimage" alt="商品图片"/>
      </div>
      <div class="item-info">
          <div class="item-title">{{product.title}}</div>
          <div class="item-desc">型号:{{product.size}}</div>
          <div class="info-bottom">
              <div class="item-price left">¥{{product.reaprice}}</div>
              <div class="item-count right">×{{product.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
    name: 'CartList',
    components: {
        CheckButton
    },
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        checkedclick(){
            this.product.ischecked = !this.product.ischecked
        }
    }
}
</script>

<style>
.cartlist-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.item-selector{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}
.item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.info-bottom{
    margin-top:10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.info-bottom .item-price{
    color: orangered;
}
</style>