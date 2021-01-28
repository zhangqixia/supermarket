<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailinfo">
      <div class="info-desc">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imageload"/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailGoodsinfo',
    data() {
        return {
            count: 0,
            imageLength: 0
        }
    },
    props: {
        detailInfo: {
            type: Object,
            default (){
                return {}
            }
        }
    },
    methods: {
        imageload() {
                this.$emit('imageload')
        }
    }
    // watch: {//监听某个属性的变化
    //     detailInfo() {
    //         //获取图片个数
    //         this.imageLength = this.detailInfo.detailImage[0].list.length
    //     }
    // }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;

}
.detailinfo{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc{
    padding: 0 15px;
}
.info-desc .start,.info-desc .end{
    position: relative;
    width: 90px;
    height: 1px;
    background-color:  #a3a3a5;
}
.info-desc .start{
    float: left;
}
.info-desc .end{
    float: right;
}
.info-desc .start::before{
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}
.info-desc .end::after{
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
    right: 0;
}
.info-desc .desc{
    padding: 15px 0;
    font-size: 14px;
}
.info-key{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 16px;
}
.info-list img{
    width: 100%;
    /* border: 1px solid #ff5777; */
}
</style>