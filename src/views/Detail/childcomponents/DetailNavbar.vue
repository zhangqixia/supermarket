<template>
    <div class="DetailNavbar">
        <nav-bar>
            <template v-slot:left>
                <div class="back" @click="back">
                    <img src="~assets/img/common/back.svg" alt=""/>
                </div>
            </template>
            <template v-slot:center>
                <div class="title">
                    <div v-for="(item,index) in title" class="titleitem" :class="{active: index === currentinex}" @click="itemclick(index)">{{item}}</div>
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name: 'DetailNavbar',
    components: {
        NavBar
    },
    data() {
        return {
            title: ['商品','参数','评论','推荐'],
            currentinex: 0
        }
    },
    methods: {
        itemclick(index) {
            this.currentinex = index
            //console.log(index)
            this.$emit('titleclick',index)
        },
        back() {
            this.$router.back();
        }
    }
}
</script>

<style>
.title{
    display: flex;
    font-size: 15px;
    /* justify-content: space-between;   也可以让元素均等分 */
}
.titleitem{
    flex: 1;
}
.title .active{
    color: var(--color-high-text);
}
.back{
    margin-top: 6px;
}
</style>