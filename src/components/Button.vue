<template>
  <button
    class="button"
    :class="[type, round ? 'round' : '', plain ? 'plain' : '']"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
@import "../styles/index.scss";
.button {
  box-sizing: border-box;
  width: 98px;
  height: 40px;
  color: $--el-text-color-regular;
  border: 1px solid $--el-border-color-base;
  background-color: #f0f7ff;
  border-radius: $--el-border-radius-base;
  transition: all 0.3 ease-out;
  &:hover {
    background-color: $--el-color-primary-light-8;
    color: $--el-color-primary-light-1;
  }
  .plain {
    background-color: #fff;
  }
}

.round {
  border-radius: 20px;
}

.primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.info {
  color: #fff;
  background-color: #767980;
  border: 1px solid #909399;

  &:hover {
    background: #909399;
    border-color: #767980;
    color: #fff;
  }
}
.warning {
  color: #fff;
  background-color: #d48a1b;
  border: 1px solid #d48a1b;

  &:hover {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.danger {
  color: #fff;
  background-color: #f23c3c;
  border: 1px solid #f23c3c;

  &:hover {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
</style>