<template>
    <div id="category">
        <div class="wrapper">
            <ul>
                <button @click="btnClick">hello</button>
                <li v-for="item in 100">列表数据{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Category',
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType: 3,
            //click: true,
            pullUpLoad: true
        })
        this.scroll.on('scroll',(options) => {
            //console.log(options)
        }),
        this.scroll.on('pullingUp',() => {
            console.log('上拉加载更多！')
        })
    },
    methods: {
        btnClick(){
            console.log('hello')
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 150px;
    overflow: hidden;
}
</style>