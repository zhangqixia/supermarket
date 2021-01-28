<template>
    <div>
        <tar-bar>
            <tar-bar-item link="/home">
                <template v-slot:icon>
                    <img src="~assets/img/tabbar/home.svg" alt=""/>
                </template>
                <template v-slot:active-icon>
                    <img src="~assets/img/tabbar/home_active.svg" alt=""/>
                </template>
                <template v-slot:text>
                    <div>首页</div>
                </template>
            </tar-bar-item>
            <tar-bar-item link="/category">
                <template v-slot:icon>
                    <img src="~assets/img/tabbar/category.svg" alt=""/>
                </template>
                <template v-slot:active-icon>
                    <img src="~assets/img/tabbar/category_active.svg" alt=""/>
                </template>
                <template v-slot:text>
                    <div>分类</div>
                </template>
            </tar-bar-item>
            <tar-bar-item link="/cart">
                <template v-slot:icon>
                    <img src="~assets/img/tabbar/cart.svg" alt=""/>
                </template>
                <template v-slot:active-icon>
                    <img src="~assets/img/tabbar/cart_active.svg" alt=""/>
                </template>
                <template v-slot:text>
                    <div>购物车</div>
                </template>
            </tar-bar-item>
            <tar-bar-item link="/profile">
                <template v-slot:icon>
                    <img src="~assets/img/tabbar/profile.svg" alt=""/>
                </template>
                <template v-slot:active-icon>
                    <img src="~assets/img/tabbar/profile_active.svg" alt=""/>
                </template>
                <template v-slot:text>
                    <div>我的</div>
                </template>
            </tar-bar-item>
        </tar-bar>
    </div>
</template>

<script>
import TarBar from 'common/tabbar/TarBar.vue'
import TarBarItem from 'common/tabbar/TarBarItem.vue'
export default {
    name: 'MainTabBar',
    components: {
        TarBar,
        TarBarItem
    }
}
</script>