<template>
  <div class="grid-view" ref="gridview">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'GridView',
    props: {
        cols: {
            type: Number,
            default: 2
        },
        hmargin: {
            type: Number,
            default: 8
        },
        vmargin: {
            type: Number,
            default: 8
        },
        itemSpace: {
            type: Number,
            default: 8
        },
        lineSpace: {
            type: Number,
            default: 8
        }
    },
    mounted: function() {
        setTimeout(this.autoLayout,100)
    },
    updated: function() {
        this.autoLayout()
    },
    methods: {
        autoLayout() {
        // 1.获取gridEl和children
        // 注: 这里为什么不用document.querySelector呢?
        // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
        let gridEl = this.$refs.gridview;
        let children = gridEl.children;

        //设置gridEl的内边距
        gridEl.style.padding = `${this.vmargin}px ${this.hmargin}px`

        //计算item的宽度
        let itemwidth = (gridEl.clientWidth -2 * this.hmargin - (this.cols - 1) * this.itemSpace) / this.cols;
        for(let i=0;i < children.length;i++){
            let item = children[i];
            item.style.width = itemwidth + 'px';
            if((i+1) % this.cols !== 0){
                item.style.marginRight = this.itemSpace + 'px'
            }
            if(i >= this.cols){
                item.style.marginTop = this.lineSpace + 'px'
            }
        }
        }
    }
}
</script>

<style>
.grid-view{
    display: flex;
    flex-wrap: wrap;
}
</style>