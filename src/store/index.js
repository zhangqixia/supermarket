import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: { //不能异步操作
    addcount(state,payload) {
      payload.count++
    },
    addtonew(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {//可以异步操作
      addCart(context,payload){
        return new Promise((resolve,reject) => {
          //console.log(this)
          //payload:新添加的商品
          let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)//判断新添加的商品iid是否等于原来的商品iid，如果是原来的数量加一
          let oldsize = context.state.cartList.find(item => item.size === payload.size)
          let oldcount = context.state.cartList.find(item => item.count !== payload.count)
          if(oldproduct && oldsize && oldcount){
            context.commit('addcount',oldproduct)
            resolve('添加商品成功')
            reject('当前商品+1失败')
          }else{
            //console.log(this)
            //context.cartList.push(payload)
            context.commit('addtonew',payload)
            resolve('添加商品成功')
            reject('添加了新商品失败')
          }
        })
    }
  },
  modules: {
  }
})
