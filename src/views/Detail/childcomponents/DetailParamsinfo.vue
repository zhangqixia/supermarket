<template>
  <div v-if="Object.keys(paramsinfo).length !== 0" class="paramsinfo">
      <div class="info-desc">{{paramsinfo.desc}}</div>
      <table class="info-size" v-for="(table,index) in paramsinfo.sizes" :key="index">
          <tr v-for="(tr,indey) in table" :key="indey">
              <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
          </tr>
      </table>
      <table class="info-params">
          <tr v-for="(info,index) in paramsinfo.infos">
              <td class="info-params-key">{{info.key}}</td>
              <td class="params-value">{{info.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="paramsinfo.image.length !== 0">
          <img :src="paramsinfo.image" alt=""/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailParamsinfo',
    props: {
        paramsinfo:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    created() {
    }
}
</script>

<style>
.paramsinfo{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc{
    color: #eb4868;
}
.info-size{
    color: red;
}
.paramsinfo table{
    width: 100%;
    border-collapse: collapse; /*合并边框*/
}
.paramsinfo table tr{
    height: 42px;
}
.paramsinfo table tr td{
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.info-params-key{
    /* 当value的数据量较大时，会挤到key，所以给一个固定宽度 */
    width: 85px;
}
.info-params{
    border-top: 1px solid rgba(0, 0, 0, .1);
}
.params-value{
    color: #eb4868;
}
.info-img img{
    width: 100%;
}
</style>