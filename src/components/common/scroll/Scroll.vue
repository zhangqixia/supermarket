<template>
  <div class="wrapper" ref="wrapper">
      <div class="conent">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullupLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        //创建scroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM: true,
            probeType: this.probeType,
            pullUpLoad: this.pullupLoad,
            click: true
        })
        //监听滚动位置
        if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll',(position) => {
                this.$emit('scroll',position)
                // this.scrollTop = Math.abs(Math.round(position.y));
                //console.log(this.scrollTop)
            })
        }

        if(this.pullupLoad){
            this.scroll.on('pullingUp',() => {
                //console.log('上拉加载更多！')
                this.$emit('pullingUp')
            })
        }
        //console.log(this.scroll)
    },
    methods: {
        scrollto(x,y,time=1000) {
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        }
    }
}
</script>

<style>

</style>