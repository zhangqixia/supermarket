<template>
    <div id="home">
        <nav-bar class="home-navbar">
         <template v-slot:center>
             <div>购物街</div>
         </template>
        </nav-bar>
        <tab-control 
            :titles="['流行','新款','精品']" 
            @tabClick="tabClick" 
            ref="tabconstrol1"
            class="tab-constrol"
            v-show="istabfixed">
        </tab-control>
         <scroll 
            class="conent" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="conentscroll" 
            :pullup-load="true"
            @pullingUp="loadmore">
            <home-slider 
                :imgs="banners" 
                @swiperImageLoad="swiperImageLoad"
            >
            </home-slider>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control 
                :titles="['流行','新款','精品']" 
                @tabClick="tabClick" 
                ref="tabconstrol2"
                >
            </tab-control>
        <goods :goods="showGoods"></goods>
         </scroll>
         <back-top 
            @click.native="backclick"
            v-show="showbacktop">
         </back-top>
    </div>
</template>

<script>
//公共组件
import NavBar from 'common/navbar/NavBar.vue'
import TabControl from 'conent/Tabcontrol/Tabcontrol.vue'
import Scroll from 'common/scroll/Scroll.vue'

//字组件
import HomeSlider from 'views/Home/chindcomponents/HomeSlider.vue'
import RecommendView from 'views/Home/chindcomponents/RecommendView.vue'
import FeatureView from 'views/Home/chindcomponents/FeatureView.vue'
import Goods from 'components/conent/Goods/Goods.vue'
import BackTop from 'conent/BackTop/BackTop.vue'
//其他方法
import {getHomemultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common2/units.js'
import {itemlistermixin,showbacktop} from 'common2/mixin.js'
export default {
    name: 'Home',
    components: {
        NavBar,
        HomeSlider,
        RecommendView,
        FeatureView,
        TabControl,
        Goods,
        Scroll,
        BackTop
    },
    mixins:[itemlistermixin],
    mixins:[showbacktop],
    computed: {
        showGoods() {   
            return this.goods[this.currenttype].list
        }
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {page: 0,list:[]},
                'new': {page: 0,list:[]},
                'sell': {page:0,list:[]},
            },
            currenttype: 'pop',
            tabOffsetTop: 0,
            istabfixed: false,
            saveY: 0
        }
    },
    created(){
        //封装在下面网络请求结果封装在一个方法中
        this.getHomemultidata();

        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');

    },
    mounted() {
        // const refresh = debounce(this.$refs.scroll.refresh,300)

        // //监听item里面的图片加载完成
        // //把this.$bus.$on('imageload',() =>{ refresh() })封装抽取为一个变量：itemimglister
        // this.itemimglister = () =>{
        //     refresh()
        // }
        // this.$bus.$on('imageload',this.itemimglister)//这里的$bus是事件总线
        //     //console.log('hello')
        //     //加载完成了就刷新一次
        //     //this.$refs.scroll && this.$refs.scroll.scroll.refresh();
        //     //console.log(refresh)

        // //图片未加载完成时tabconstrol的位置
        // //console.log(this.$refs.tabconstrol2.$el.offsetTop)
    },
    //activated:在组件被激活时调用
    activated() {
        //监听item中的图片是否全部加载完成
        this.$refs.scroll.scrollto(0,this.saveY,0)
        //console.log(this.saveY)

        //取消监听图片加载
        this.$bus.$off('imageload',this.itemimglister)
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
        //console.log(this.saveY)
    },
    methods:{
        //请求轮播图数据方法
        getHomemultidata(){
            getHomemultidata().then(res => {
                //console.log(res)
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
                // console.log(this.banners)
                //console.log(this.recommends)
            })
        },
        //请求下面商品数据方法
        getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type,page).then(res => {
                //console.log(res.data.data.list)
                this.goods[type].list.push(...res.data.data.list);
                this.goods[type].page += 1;

                //完成加载更多
                this.$refs.scroll.finishPullUp();
            })
        },
        tabClick(index){
            switch(index){
                case 0:
                    this.currenttype = 'pop';
                    break;
                case 1:
                    this.currenttype = 'new';
                    break;
                case 2:
                    this.currenttype = 'sell';
                    break;
            }
            this.$refs.tabconstrol1.currentindex = index
            this.$refs.tabconstrol2.currentindex = index
        },
        conentscroll(position){
            //1.判断backtop是否显示
            this.showbacktop = (-position.y) > 600
            //2.决定tabconstrol是否吸顶（position：fixed）
            this.istabfixed = (-position.y) > this.tabOffsetTop
        },
        loadmore() {
            //console.log('首页加载更多')
            this.getHomeGoods(this.currenttype)
        },
        swiperImageLoad() {
            //console.log(this.$refs.tabconstrol2.$el.offsetTop) //监听图片加载完成后tabconstrol2的位置
             this.tabOffsetTop = this.$refs.tabconstrol2.$el.offsetTop
        },
        backclick() {
            this.$refs.scroll.scrollto(0,0,300)
        }
    }
}
</script>

<style scoped>
#home{
    height: 100vh;
    position: relative;
}
.home-navbar{
    background-color: var(--color-tint);
    color: #ffffff;
}
.conent{
    height: calc(100vh - 93px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.tab-constrol{
    position: relative;
    z-index: 1;
    transition: all 1s;
}
</style>