<template>
  <div>
    <Button @click="fun">默认按钮</Button>
    <Button type="primary">主要</Button>
    <Button type="success">成功</Button>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance} from 'vue';
import Button from "./components/Button.vue";
const vm = getCurrentInstance();
console.log(vm);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
