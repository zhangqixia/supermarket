<template>
  <div v-if="Object.keys(recommendlist).length !== 0" class="recommend-info">
          <good-item v-for="(item,index) in recommendlist" :key="index" :goodsitem="item"></good-item>
  </div>
</template>

<script>
import GoodItem from 'conent/Goods/Goodsitem.vue'
export default {
    name: 'DetailRecommendInfo',
    components: {
        GoodItem
    },
    props: {
        recommendlist: {
            type: Array
        }
    },
    created() {
        //console.log(this.recommendlist)
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.recommend-info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 1px;
}
</style>