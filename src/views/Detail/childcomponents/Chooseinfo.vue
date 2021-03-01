<template>
  <div class="chooseinfo">
      <div class="topinfo">
            <span class="imgs"><img :src="choosegoods.topimage"/></span>
            <span class="wenzi">¥{{choosegoods.reaprice}}</span>
            <span class="chenghao" @click="fanhui">✖</span>
      </div>
      <div class="middleinfo">尺码:
          <div class="size"
           v-for="(item,index) in titles" :key="index" 
           @click="showsizeinfo(index)"
           :class="{actives : index === currentindex}">
           <span>{{item}}</span>
          </div>
      </div>
      <div class="count">
        <span><p>购买数量</p></span>
        <span><button @click="index_jian" :disabled="currindex<=0">-</button>{{currindex}}<button @click="index_jia">+</button></span>
      </div>
      <div class="bottominfo">
          <button @click="goback">确定</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ChooseInfo',
    data(){
        return{
            currindex: 1,
            currentindex: 0,
            sizeindex: 0
        }
    },
    props: {
        choosegoods: {
            type: Object,
            default() {
                return {}
            }
        },
        titles: {
            type: Array,
            default: []
        }
    },
    created(){
        //console.log(this.choosegoods)
    },
    methods: {
        fanhui(){
            this.$emit("goback")
        },
        goback(index,shuliang) {
            shuliang = this.currindex
            index = this.sizeindex
            const gotocart = this.choosegoods
            gotocart.count = shuliang
            gotocart.size = this.titles[index]
            //console.log(gotocart)
            this.$emit("goback")
            this.$store.dispatch('addCart',gotocart).then(res => {
                //console.log(res)
                //console.log(this)
                this.$toast.show(res,1500)
            })
        },
        index_jia(){
            this.currindex++
        },
        index_jian(){
            if(this.currindex <=1){
                this.$toast.show('数量低于范围~',1500)
            }
            this.currindex--
        },
        showsizeinfo(index){
            this.currentindex = index
            this.sizeindex = index
        }
    }
}
</script>

<style>
.chooseinfo{
    position:absolute;
    width: 100%;
    height: 280px;
    background-color: #e9e6e6;
    left: 0;
    bottom: 0;
    z-index: 99;
    animation: animate 0.1s ease-in 1;
    overflow: hidden;
}
@keyframes animate{
    from {
        height: 0px;
        bottom: 0px;
    }
    to {
        height: 280px;
        bottom: 0px;
    }
}
.imgs{
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 0;
    padding: 0;
}
.topinfo{
    padding: 10px 15px;
    display: flex;
    border-bottom: 2px solid #999;
}
.topinfo .imgs img{
    width: 50px;
    height: 50px;
}
.topinfo .wenzi{
    margin-left: 20px;
    line-height: 50px;
    color: red;
    font-size: 18px;
}
.topinfo .chenghao{
    width: 20px;
    height: 20px;
    border: 1px solid #222;
    text-align: center;
    border-radius: 20px;
    color: #222;
    margin-left: 140px;
}
.middleinfo{
    font-size: 14px;
    padding: 5px;
    border-bottom: 2px solid #999;
    display: flex;
}
.middleinfo .size{
    margin: 5px 0;
    display: flex;
    padding:20px 2px;
}
.middleinfo .size span{
    display: block;
    list-style: none;
    flex: 1;
    width: 40px;
    height: 20px;
    border: 0.1px solid #000;
    background-color: rgb(250, 250, 250);
    margin: 10px 5px;
    padding: 3px 3px;
    text-align: center;
    line-height: 12px;
    color: #000;
}
.count{
    border: 1px solid blanchedalmond;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
}
.count span{
    flex: 1;
}
.count span:nth-child(1) p{
    margin-right: 70px;
}
.count span:nth-child(2){
    font-size: 18px;
    color: #000;
    margin-right: -15px;
}
button {
    width: 30px;
    height: 20px;
    margin:10px 10px 0px 10px;
    text-align: center;
    line-height: 10px;
}
.bottominfo{
    text-align: center;
    height: 50px;
}
.bottominfo button{
    border: 0;
    outline: none;
    width: 300px;
    height: 40px;
    background-color: rgba(255, 81, 0, 0.979);
    border-radius: 20px;
    margin-top: 6px;
    text-align: center;
}
/* .actives span{
    background-color: var(--color-tint);
    border: 1px solid salmon;
} */
.middleinfo .actives span{
    border: 1px solid red;
}
</style>