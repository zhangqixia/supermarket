<template>
    <div id="tarbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TarBar'
}
</script>

<style>
    #tarbar{
        /* flex布局 */
        display: flex;
        text-align: center;
        /* 基本样式 */
        background-color: #c2c2c2;
        height: 49px;
        box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
        /* 定位相关 */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
</style>