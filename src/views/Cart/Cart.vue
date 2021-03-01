<template>
    <div id="cart">
        <nav-bar>
            <template v-slot:center  class="navbar">
                <div><p>购物车({{cartlength}})</p></div>
            </template>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list v-for="(item,index) in cartlist" :key="index" :product="item"></cart-list>
        </scroll>
        <cart-btm-bar></cart-btm-bar>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
import CartList from './childcomponents/CartList.vue'
import CartBtmBar from './childcomponents/CartBtmBar.vue'

import Scroll from 'common/scroll/Scroll.vue'
export default {
    name: 'Cart',
    components: {
        NavBar,
        CartList,
        Scroll,
        CartBtmBar
    },
    computed: {
        cartlength() {
            return this.$store.state.cartList.length
        },
        cartlist() {
            return this.$store.state.cartList
        }
    },
    activated() {
        
    }
}
</script>
<style scoped>
#cart .navbar{
    background-color: var(--color-tint);
    color: #fff;
}
#cart{
    height: 100vh;
    position: relative;
    touch-action: none;
}
.content{
    height: calc(100vh - 44px - 49px - 30px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>