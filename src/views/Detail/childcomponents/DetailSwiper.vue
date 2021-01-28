<template>
  <div class="DetailSwiper">
      <swiper class="swiperitem">
          <swiper-item v-for="(item,index) in topimage" :key="index">
              <img :src="item" alt=""/>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        topimage:{
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.swiperitem{
    height: 300px;
    overflow: hidden;
}
</style>