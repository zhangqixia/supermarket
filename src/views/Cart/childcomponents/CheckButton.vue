<template>
      <div class="icon-selector" :class="{selectoractive: value}">
        <img src="~/assets/img/cart/tick.svg" alt=""/>
      </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        value: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        // selectItem() {
        //     this.$emit('checkbtnclick')
        // }
    },
    watch: {
        // value(newvalue) {
        //     this.checked = newvalue;
        // }
    }
}
</script>

<style>
.icon-selector{
    position: relative;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
}
.icon-selector img{
    margin-top: 2px;
}
.selectoractive{
    background-color: #ff8198;
    border-color: #ff8198;
}
</style>