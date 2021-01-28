<template>
    <div class="bottom-bar">
        <div class="bar-item item-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item item-right">
            <div class="cart" @click="addcart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBottomBar',
    methods: {
        addcart() {
            this.$emit('addcart')
        }
    }
}
</script>

<style>
.bottom-bar{
    position: relative;
    height: 44px;
    z-index: 10;
    background-color: #fff999;
    text-align: center;
    display: flex;
}
.bar-item{
    flex: 1;
    display: flex;
}
.bar-item div{
    flex: 1;
}
.item-left .text{
    font-size: 13px;
}
.item-left .icon{
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px auto 1px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.item-left .service{
    background-position:0 -47px;
}
.item-left .shop{
    background-position: 0 -89px;
}
.item-right{
    font-size: 15px;
    color: #fff;
    line-height: 44px;
}
.item-right .cart{
    background-color: #ffe817;
    color: #333;
}
.item-right .buy{
    background-color: #f69;
}
</style>