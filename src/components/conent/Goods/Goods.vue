<template>
  <div class="goods">
        <good-item v-for="(item,index) in goods" :goodsitem="item" :key="index"></good-item>
  </div>
</template>

<script>
import GoodItem from './Goodsitem.vue'
export default {
    name: 'Goods',
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodItem
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 1px;
}
</style>