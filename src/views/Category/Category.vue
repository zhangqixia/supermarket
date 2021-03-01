<template>
    <div id="category">
        <nav-bar class="category-navbar">
            <template v-slot:center>
                <div>商品分类</div>
            </template>
        </nav-bar>
        <div class="content">
            <tab-menu :categories="categories" @selectitem="selectitem"></tab-menu>
            <!-- <scroll class="tab-conent"> -->
                <!-- <div> -->
            <tab-conent-category :subcategories="subcategories"></tab-conent-category>
                <!-- </div> -->
            <!-- </scroll> -->
        </div>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'

import TabMenu from './chindcomponents/TabMenu.vue'
import Scroll from 'common/scroll/Scroll.vue'
import TabContDetail from './chindcomponents/TabContDetail.vue'
import TabConentCategory from './chindcomponents/TabConentCategory.vue'
import TabConent from './chindcomponents/TabConent.vue'

import {getCategory,getSubcategory} from 'network/category.js'
import {POP,NEW,SELL} from 'common2/const.js'
import {tabControlMixin} from 'common2/mixin.js'

export default {
    name: 'Category',
    data() {
        return {
            categories: [],
            subcategories: [],
            categoryData: {},
            currentindex: -1
        }
    },
    mixins:[tabControlMixin],
    components: {
        NavBar,
        TabMenu,
        Scroll,
        TabContDetail,
        TabConentCategory,
        TabConent
    },
    created() {
        this._getCategory(),
        this._getSubcategory()
    },
    computed: {
        showsubcategory(){
            if(this.currentindex === -1){
                return {}
            }else{
                return this.categoryData[this.currentindex].subcategories
            }
        },
        showcategorydetail(){
            if(this.currentindex === -1){
                return {}
            }else{
                return this.categoryData[this.currentindex].categoryDetail[this.currentType]
            }
        }
    },
    methods: {
            _getCategory(){
                getCategory().then(res => {
                    //console.log(res)
                    this.categories = res.data.data.category.list
                    //console.log(this.categories)
                    // for(let i=0;i<this.categories.length;i++){
                    //     this.categoryData[i] = {
                    //         subcategories: {},
                    //         categoryDetail: {
                    //             'pop': [],
                    //             'new': [],
                    //             'sell': [] 
                    //         }
                    //     }
                    // }
                    //this.getSubcategories(0)
                })
                // getSubcategory().then(res => {
                //     console.log(res)
                // })
            },
            _getSubcategory(){
                getSubcategory(90).then(res => {
                    //console.log(res)
                    this.subcategories = res.data.data
                    console.log(res.data.data)

                })
            },
            // getSubcategories(index) {
            //     this.currentindex = index
            //     const mailKey = this.categories[index].mailkey;
            //     getSubcategory(mailkey).then(res => {
            //         this.categoryData[index].subcategories = res.data
            //         this.categoryData = {...this.categoryData}
            //         this.getCategoryDetail(POP)
            //         this.getCategoryDetail(NEW)
            //         this.getCategoryDetail(SELL)
            //     })
            // },
            // getCategoryDetail(type){
            //     //1.获取请求的分类
            //     const miniWallkey = this.categories[this.currentindex].miniWallkey;
            //     //2.发送请求
            //     _getCategoryDetail(miniWallkey,type).then(res => {
            //         //将获取的数据保存下来
            //         this.categoryData[this.currentindex]._getCategoryDetail[type] = res
            //         this.categoryData = {...this.categoryData}
            //     })
            // },
            selectitem(index) {
                //this.getSubcategories(index)
                console.log(this.categories[index].title)
            }
    },
}
</script>

<style scoped>
#category{
    height: 100vh;
}
.category-navbar{
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
}
.content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
}
/* .tab-conent{
    border: 1px solid green;
    height: calc(100vh - 49px - 44px);
    flex: 1;
    overflow: hidden;
} */
</style>