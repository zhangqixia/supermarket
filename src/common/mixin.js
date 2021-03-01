import {debounce} from './units.js'
import BackTop from 'conent/BackTop/BackTop.vue'
import {POP,NEW,SELL} from './const.js'

export const itemlistermixin = {
    data() {
        return {
            itemimglister: null,
            newrefresh: null
        }
    },
    mounted() {
                //防抖动
         this.newrefresh = debounce(this.$refs.scroll.refresh,1000)

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

export const tabControlMixin = {
    data: function() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = POP
                break
                case 1:
                    this.currentType = NEW
                break
                case 2:
                    this.currentType = SELL
                break
            }
            console.log(this.currentType)
        }
    }
}