<template>
    <div>
        <swiper ref="swiper" v-if="imgs.length">
			<swiper-item v-for="(item,index) in imgs" :key="index">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="imageload"/>
				</a>
			</swiper-item>
		</swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'
export default {
	name: 'HomeSlider',
	data() {
		return {
			isload: false
		}
	},
    props:{
        imgs:{
            type: Array,
            default: []
        }
    },
	methods:{
		stopTimer() {
			this.$refs.swiper.stopTimer()
		},
		startTimer() {
			if(this.$refs.swiper){
				this.$refs.swiper.startTimer()
			 }
		},
		imageload() {
			if(!this.isload){
				this.$emit("swiperImageLoad")
				this.isload = true
			}
		}
	},
	components:{
		Swiper,
		SwiperItem
	}
}
</script>