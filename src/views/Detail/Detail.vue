<template>
  <div id="detail">
      <detail-navbar @titleclick="titleclick" ref="nav"></detail-navbar>
      <scroll class="conents" ref="scroll" :probe-type="3" @scroll="conentscroll">
        <detail-swiper :topimage="topimage"></detail-swiper>
        <detail-baseinfo :goods="goods"></detail-baseinfo>
        <detail-shopinfo :shops="shops"></detail-shopinfo>
        <detail-goodsinfo :detailInfo="detailInfo" @imageload="detailimageload"></detail-goodsinfo>
        <detail-paramsinfo :paramsinfo="paramsinfo" ref="params"></detail-paramsinfo>
        <detail-rate :commontinfo="commontinfo" ref="commont"></detail-rate>
        <detail-recomend-info :recommendlist="recommend" ref="recomend"></detail-recomend-info>
      </scroll>
      <back-top @click.native="backclick" v-show="showbacktop"></back-top>
      <detail-bottom-bar @addcart="addtocart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavbar from './childcomponents/DetailNavbar.vue'
import DetailSwiper from './childcomponents/DetailSwiper.vue'
import DetailBaseinfo from './childcomponents/DetailBaseinfo.vue'
import DetailShopinfo from './childcomponents/DetailShopinfo.vue'
import DetailGoodsinfo from './childcomponents/DetailGoodsinfo.vue'
import DetailParamsinfo from './childcomponents/DetailParamsinfo.vue'
import DetailRate from './childcomponents/DetailRate.vue'
import GoodsItem from 'components/conent/Goods/Goodsitem.vue'
import DetailBottomBar from './childcomponents/DetailBottomBar.vue'
import DetailRecomendInfo from './childcomponents/DetailRecomendInfo'
import BackTop from 'conent/BackTop/BackTop.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import {getdetaildata,Goodsinfo,Shops,Params,getRecommend} from 'network/detail.js'
import {debounce} from 'common2/units.js'
import {itemlistermixin,showbacktop} from 'common2/mixin.js'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topimage: [],
            goods: {},
            shops: {},
            detailInfo: {},
            paramsinfo: {},
            commontinfo: {},
            recommend: [],
            themesYs: [],
            getThemesY: null,
            currentIndex: 0
        }
    },
    mixins: [itemlistermixin],
    mixins: [showbacktop],
    components: {
        DetailNavbar,
        DetailSwiper,
        DetailBaseinfo,
        DetailShopinfo,
        Scroll,
        DetailGoodsinfo,
        DetailParamsinfo,
        DetailRate,
        GoodsItem,
        DetailRecomendInfo,
        DetailBottomBar,
        BackTop
    },
    created() {
        //
        this.iid = this.$route.params.iid

        //请求的详情页数据
        getdetaildata(this.iid).then(res => {
            //console.log(res) //打印整个信息

            //1.取出轮播图的数据
            const data = res.data.result;
            this.topimage = data.itemInfo.topImages
            //console.log(this.topimage)

            //2.获取商品信息
            this.goods = new Goodsinfo(data.itemInfo,data.columns,data.shopInfo.services)
            //console.log(this.goods)

            //3.获取店家信息
            this.shops = new Shops(data.shopInfo)
            //console.log(this.shops)

            //4.获取商品详情信息
            this.detailInfo = data.detailInfo
            //console.log(this.detailInfo)

            //5.获取商品参数
            this.paramsinfo = new Params(data.itemParams.info,data.itemParams.rule)
            //console.log(this.paramsinfo)

            //6.获取评价信息
            this.commontinfo = data.rate.list[0]
            //console.log(this.commontinfo)

        //     //第一次获取值不对原因：this.$refs.params.$el组件还没有渲染完成
        //     this.themesYs = []
        //     this.themesYs.push(0)
        //     this.themesYs.push(this.$refs.params.$el.offsetTop)
        //     this.themesYs.push(this.$refs.commont.$el.offsetTop)
        //     this.themesYs.push(this.$refs.recomend.$el.offsetTop)
        //     console.log(this.themesYs)


        //     this.$nextTick(() => {
        //     //第二次获取值不对原因：图片还没有加载完成,图片的高度还没有计算在内
        //     this.themesYs = []
        //     this.themesYs.push(0)
        //     this.themesYs.push(this.$refs.params.$el.offsetTop)
        //     this.themesYs.push(this.$refs.commont.$el.offsetTop)
        //     this.themesYs.push(this.$refs.recomend.$el.offsetTop)
        //     console.log(this.themesYs)
        // })
        //点击定位到相应位置的防抖动函数
            this.getThemesY = debounce(() => {
            this.themesYs = []
            this.themesYs.push(0)
            this.themesYs.push(this.$refs.params.$el.offsetTop)
            this.themesYs.push(this.$refs.commont.$el.offsetTop)
            this.themesYs.push(this.$refs.recomend.$el.offsetTop)
            this.themesYs.push(Number.MAX_VALUE)    //方法二：在数组中最后添加一个javascript中最大的数用于判断详情页定位
            //console.log(this.themesYs)
        },300)
        })

        //请求推荐数据
        getRecommend().then(res => {
            this.recommend = res.data.data.list
            //console.log(this.recommend)
        })
    },
    destroyed() {
        //取消监听图片加载
        this.$bus.$off('imageload',this.itemimglister)
    },
    methods: {
        detailimageload(){
                this.getThemesY()
        },
        titleclick(index) {
            //console.log(index)
            //this.$refs.scroll.scrollto(0,-this.themesYs[index]+44,300) //这里加44是因为上面的导航栏高为44px
            this.$refs.scroll.scrollto(0,-this.themesYs[index],300)
        },
        conentscroll(position){
            //console.log(position)
            const positionY = -position.y;
            //const lastthemesYs = this.themesYs.reverse();
            //console.log(lastthemesYs)
            //方法一：
            // for(let i= 0;i < this.themesYs.length;i++){
            //     if(this.currentIndex !== i && ((i <this.themesYs.length - 1 && positionY >=this.themesYs[i] && positionY < this.themesYs[i+1]) || (i === this.themesYs.length -1 && positionY >= this.themesYs[i]))){
            //         this.currentIndex = i
            //         this.$refs.nav.currentinex = this.currentIndex
            //         console.log(this.currentIndex)
            //     }
            // }
        //方法二：在数组最后添加一个javascript中能表示的最大数
            for(let i=0;i< this.themesYs.length-1; i++){
                if(this.currentIndex !==i && (positionY >= this.themesYs[i] && positionY < this.themesYs[i+1])){
                    this.currentIndex = i
                    this.$refs.nav.currentinex = this.currentIndex
                    //console.log(this.currentIndex)
                }
            }

            this.showbacktop = (-position.y) > 600
        },
        addtocart() {
            // console.log('addtocart')
            const product = {}
            //title,desc,reaprice,topimage[0]
            product.iid = this.$route.params.iid;
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.reaprice = this.goods.reaprice
            product.topimage = this.topimage[0]
            product.ischecked = true
            //console.log(product)

            this.$store.commit('addCart',product)
        }
    }

}
</script>

<style>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.conents{
    overflow: hidden;
    height: calc(100% - 44px - 44px);
}
</style>