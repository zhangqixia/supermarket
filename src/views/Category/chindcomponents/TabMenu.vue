<template>
    <scroll id="scrollmenu">
        <div class="tabmenu">
            <div
             class="menu-list"
             :class="{active: index === currentindex}"
             v-for="(item,index) in categories"
             @click="itemclick(index)"
             :key="index">
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from 'common/scroll/Scroll.vue'
export default {
    name: 'TabMenu',
    data() {
        return {
            currentindex:0
        }
    },
    props: {
        categories:{
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Scroll
    },
    methods: {
        itemclick(index){
            this.currentindex = index
            this.$emit('selectitem',index)
        }
    }
}
</script>

<style>
#scrollmenu{
    width: 80px;
    height: 100%;
    background-color: #f6f6f6;
    box-sizing: border-box;
    overflow: hidden;
}
.menu-list{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}
.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);

}
</style>