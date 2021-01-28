<template>
  <div class="goodsitem" @click="itemclick">
      <img :src="showImage" @load="imageload"/>
    <div class="info">
        <p class="title">{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.orgPrice}}</span>
        <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodItem',
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageload(){
            //console.log("imageload")
            //通过mixin混入判断
            this.$bus.$emit('imageload')


            //通过路由判断
            // if(this.$route.path.indexOf('/home')){
            //     this.$bus.$emit('homeimageload')
            // }else if(this.$route.path.indexOf('/detail')){
            //     this.$bus.$emit('detailimageload')
            // }
        },
        itemclick() {
                this.$router.push('/detail/' + this.goodsitem.iid)

        }
    },
    computed: {
        showImage(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    }
}
</script>

<style>
.goodsitem{
    padding-bottom: 35px;
    width: 48%;
    position: relative;
    margin-bottom: 2px;
}
.goodsitem img{
    width: 100%;
    height: 100%;
    border-radius: 2%;
}
.goodsitem .info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
}
.goodsitem .info .price{
    color: #ff5777;
    font-size: 14px;
    margin-right: 50px;
}
.goodsitem .info .cfav{
    font-size: 14px;
    position: relative;
}
.goodsitem .info .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg")0 0/15px 15px;
}
</style>