import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state,payload){
      //console.log(this)
      //payload:新添加的商品
      let oldproduct = state.cartList.find(item => item.iid === payload.iid)//判断新添加的商品iid是否等于原来的商品iid，如果是原来的数量加一
      if(oldproduct){
        oldproduct.count += 1;
      }else{
        payload.count = 1;
        //console.log(this)
        state.cartList.push(payload)
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
