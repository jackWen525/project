<template>
  <div class="btn-view">
    <Button round plain>默认按钮</Button>
    <Button type="primary">主要</Button>
    <Button type="success">成功</Button>
    <Button type="info">默认按钮</Button>
    <Button type="warning">主要</Button>
    <Button type="danger">成功</Button>
  </div>
  <Calendar/>
</template>

<script lang="ts" setup>
import Button from "./components/Button.vue";
import Calendar from "./components/Calendar.vue";
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
  li,ul {
    list-style-type:none;
  }
}
</style>
