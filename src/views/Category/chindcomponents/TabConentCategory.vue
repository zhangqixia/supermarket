<template>
    <scroll id="subcategory" ref="scroll">
    <div class="tabcont">
        <grid-view :cols="3" :lineSpace="15" :vmargin="20" v-if="subcategories">
                <div class="item" v-for="(item,index) in subcategories" :key="index">
                    <a class="panel" :href="item.url">
                        <img class="item-img" :src="item.coverImgUrl" @load="imageload" alt=""/>
                        <div class="item-text">{{item.brandName}}-{{item.modelName}}</div>
                    </a>
                </div>
        </grid-view>
    </div>
    </scroll>
</template>

<script>
import GridView from 'common/gridview/GridView.vue'
import Scroll from 'common/scroll/Scroll.vue'
import {itemlistermixin} from 'common2/mixin.js'
export default {
    name: 'TabConentCategory',
    mixins: [itemlistermixin],
    props: {
        subcategories: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GridView,
        Scroll
    },
    created(){
        //console.log(this.subcategories)

    },
    methods: {
        imageload(){
            this.$bus.$emit('imageload')
        }
    }
}
</script>

<style scoped>
#subcategory{
    height: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
}
.panel img{
    width: 100%;
}
.item{
    text-align: center;
    font-size: 12px;
    overflow: hidden;
}
.item-img{
    margin-top: 10px;
    width: 80%;
}
.item-text{
    /* margin-top: 15px; */
    /* margin-left: 10px; */
    width: 120px;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    white-space: nowrap;
    animation: 8s wordsloop linear infinite normal;
    font-size: 14px;
}

@keyframes wordsloop {
    100%{
        transform: translateX(100%);

    }
    100%{
        transform: translateX(-100%);
    }
}
</style>