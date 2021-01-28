<template>
    <div id="tarbaritem" @click="itemclick">
        <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
        <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
        <div class="item-text" :style="activestyle"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TarBarItem',
    data() {
        return {

        }
    },
    props: {
        link: {
            type: String,
            required: true
        }
    },
    methods: {
        itemclick(){
            //this.#route => 处于活跃(被选中)的路由
            //this.$router => 整个路由
            //一个是全局路由，一个是局部路由
            if(this.$route.path != this.link){
                this.$router.replace(this.link)
            }
        }
        },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) !== -1
        },
        activestyle() {
            return this.isActive? {'color':'#ff5777'} : {}
        }
    }
}
</script>

<style>
#tarbaritem{
    flex: 1;
}
.item-icon img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
}
.item-active-icon img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;  
}
.item-text{
    font-size: 14px;
    margin-top: 3px;
    color: #333;
}
</style>