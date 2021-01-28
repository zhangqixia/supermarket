<template>
    <div class="recommends">
        <div v-for="item in recommends" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image"/>
                <div class="span">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props:{
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    },
    created() {
        console.log()
    }
}
</script>

<style scoped>
.recommends{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px 5px;
    border-bottom: 8px solid #eee;
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
    width: 65px;
    height: 65px;
}
.recommends-item .span{
    margin-top: 1px;
    font-size: 12px;
}
</style>