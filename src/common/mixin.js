import {debounce} from './units.js'
import BackTop from 'conent/BackTop/BackTop.vue'

export const itemlistermixin = {
    data() {
        return {
            itemimglister: null,
            newrefresh: null
        }
    },
    mounted() {
                //防抖动
         this.newrefresh = debounce(this.$refs.scroll.refresh,300)

        this.itemimglister = () => {
            this.newrefresh()
        }
        this.$bus.$on('imageload',this.itemimglister)
    }
}

export const showbacktop = {
    components: {
        BackTop
    },
    data() {
        return{
            showbacktop: false
        }
    },
    methods: {
        backclick(){
            this.$refs.scroll.scrollto(0,0)
        },
    }
}