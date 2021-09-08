<template>
  <div class="calendar">
    <div class="calender-top">
      <div class="calender-top-left">{{ dates }}</div>
      <div class="calender-top-right">
        <span @click="addMonth(-1)">上一月</span>
        <span @click="getDan">今天</span>
        <span @click="addMonth(+1)">下一月</span>
      </div>
    </div>
    <div class="calender-centre">
      <li v-for="i in day">周{{ i }}</li>
      <li>周日</li>
    </div>
    <div class="calender-day">
      <li v-for="i in da"></li>
      <li v-for="i in days" :class="[i === actDay ? 'act' : '']">{{ i }}</li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let tim = new Date();
// 年
let year = tim.getFullYear();
// 月
let month = tim.getMonth() + 1;
// 当前天
let actDay = tim.getUTCDate();
let dates = ref(`${year} 年 ${month} 月`);
let day = ["一", "二", "三", "四", "五", "六"];
// 一个月多少天
let days = ref(new Date(year, month, 0).getDate());
// 获取每个月份是星期几
function getDay(d?): Number {
  let num = d || month;
  let day = new Date(year, num - 1, 1).getDay();
  let res = 0;
  switch (day) {
    case 0:
      res = 6;
      break;
    case 1:
      res = 0;
      break;
    case 2:
      res = 1;
      break;
    case 3:
      res = 2;
      break;
    case 4:
      res = 3;
      break;
    case 5:
      res = 4;
      break;
    case 6:
      res = 5;
      break;
    default:
      break;
  }
  return res;
}
function getDan() {
  let year = tim.getFullYear();
  // 月
  let month = tim.getMonth() + 1;
  days.value = new Date(year, month, 0).getDate();
  dates.value = `${year} 年 ${month} 月`;
  da.value = getDay(month - 1);
}
let da = ref(getDay());
// 月份修改
function addMonth(i) {
  if (month < 12 || month > 1) {
    month = month + i;
  }
  if (month < 1) {
    console.log(1);

    year = year + i;
    month = 12;
  } else if (month > 12) {
    year = year + i;
    month = 1;
    console.log(12);
  }
  console.log(month);

  days.value = new Date(year, month, 0).getDate();
  dates.value = `${year} 年 ${month} 月`;
  da.value = getDay();
}
</script>

<style lang="scss" scoped>
.calendar {
  width: 310px;
  border: 1px solid #dcdfe6;
  .calender-top {
    margin-top: 15px;
    display: flex;
    font-size: 12px;
    .calender-top-left {
      margin-left: 5px;
      width: 30%;
      text-align: left;
    }
    .calender-top-right {
      flex: 1;
      text-align: right;
      margin-right: 5px;
      font-size: 10px;
      span {
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        padding: 3.5px 7px;
        &:nth-child(2) {
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
        }

        &:hover {
          background-color: #d9ecff;
          border: 1px solid #409eff;
        }
      }
    }
  }
  .calender-centre {
    margin: 10px 15px;
    box-sizing: border-box;
    justify-content: space-between;
    list-style-type: none;
    font-size: 12px;
    display: flex;
    text-align: center;
    li {
      width: 45px;
    }
  }

  .calender-day {
    box-sizing: border-box;
    margin: 0 15px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 15px;
    border-top: 1px solid #ebeef5;
    li {
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-left: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;

      &:nth-child(7n) {
        border-right: 1px solid #ebeef5;
      }
      &:nth-last-child(1) {
        border-right: 1px solid #ebeef5;
      }
      &:hover {
        background-color: #f2f8fe;
      }
    }
    .act {
      color: #409eff;
      background-color: #f2f8fe;
    }
  }
}
</style>