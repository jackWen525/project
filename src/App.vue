<template>
  <div class="btn-view">
    <Button @fn="fn">默认按钮</Button>
    <Button type="primary">主要</Button>
    <Button type="success">成功</Button>
    <Button type="info">默认按钮</Button>
    <Button type="warning">主要</Button>
    <Button type="danger">成功</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "./components/Button.vue";
function fn(e) {
  console.log(e);
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .btn-view {
    button {
      margin-right: 10px;
    }
  }
}
</style>
