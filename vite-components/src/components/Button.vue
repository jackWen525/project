<template>
  <button class="button">
      <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import {defineEmits} from "vue"
const props = defineProps({
    type:{
        type:String,
        default:""
    }
})
</script>

<style lang="scss">
@import "../styles/index.scss";
.button {
    box-sizing: border-box;
    width: 98px;
    height: 40px;
    color: $--el-text-color-regular;
    border: 1px solid $--el-border-color-base;
    background-color: #F0F7FF;
    border-radius: $--el-border-radius-base;
    transition: all .3 ease-out;
    &:hover {
        background-color: $--el-color-primary-light-8;
        color: $--el-color-primary-light-1;
    }
}
</style>