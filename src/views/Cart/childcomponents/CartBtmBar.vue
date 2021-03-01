<template>
    <div class="cartbar">
        <div class="check-conent">
            <check-button :value="isselectall" @click.native="checkclick" class="check-button"></check-button>
            <span>全选</span>
        </div>
        <div class="totalprice">
            合计:{{totalprice}}
        </div>
        <div class="calculate" @click="gocheck">
            去计算({{checkedlength}})
        </div>
    </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
    name: 'CartBtmBar',
    components: {
        CheckButton
    },
    computed: {
        totalprice() {
            return '¥' + this.$store.state.cartList.filter(item => {    //filter:过滤不是选中状态，return的判断条件
                return item.ischecked
            }).reduce((prevlue,item) => {   //reduce:计算数组前后的总和
                return prevlue + item.reaprice * item.count
            },0).toFixed(2)
        },
        checkedlength() {
            return this.$store.state.cartList.filter(item => item.ischecked).length
        },
        isselectall() {
            if(this.$store.state.cartList.length === 0) return false//当没有数据时显示未选中

            //方法一：利用filter过滤函数把所有都判断一遍，如果ischecked的长度不为0，说明有一个没选中，则返回false
            //return !(this.$store.state.cartList.filter(item => !item.ischecked).length)

            //方法二：利用find函数查找，只要找到一个没被选中就返回false
            return !this.$store.state.cartList.find(item => !item.ischecked)

            //方法三：普通遍历
            // for(let item of this.$store.state.cartList){
            //     if(!item.ischecked){
            //         return false
            //     }
            // }
            // return true
        }
    },
    methods: {
        checkclick() {
            if(this.isselectall){
                this.$store.state.cartList.forEach(item => item.ischecked = false)
            }else{
                this.$store.state.cartList.forEach(item => item.ischecked = true)
            }
        },
        gocheck() {
            if(!this.isselectall){
                this.$toast.show('请先选择商品',1500)
            }else{
                this.$toast.show('即将跳转支付页面',1500)
            }
        }
    }
}
</script>

<style>
.cartbar{
    display: flex;
    height: 30px;
    background-color: #eee;
    /* text-align: center; */
    position: absolute; 
    z-index: 10;
    right: 0;
    left: 0;
    bottom: 49px;
    line-height: 30px;
    font-size: 14px;
}
.check-content{
    display: flex;
    align-items: center;
    width: 90px;
}
.check-button{
    float: left;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 3px;
    margin-left: 15px;
    margin-top: 5px;
}
.totalprice{
    margin-left: 40px;
    flex: 1;
}
.calculate{
    width: 90px;
    text-align: center;
    color: #fff;
    background-color: lightcoral;
}
</style>