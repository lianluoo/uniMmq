/*
 * @Author: your name
 * @Date: 2021-04-15 15:25:58
 * @LastEditTime: 2021-04-15 18:43:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniMmq\main.js
 */
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
