<template>
  <!-- <div style="height:150px; margin-top:100px">
    <d-slider v-model="options.volume"></d-slider>
  </div>-->
  <div style="text-align: center">
    <button
      @click="options.src = 'https://litlive-public-resources.s3-us-west-1.amazonaws.com/images/6169ba101c316e057b07528f20ad7c3fdc12f56ddce53b58f2cd8e0ff1b38bbc.mp4'"
    >{{ options.src }}</button>
    <videoPlay ref="video" style="display: inline-block; width: 100%" v-bind="options" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from "vue";
import { videoPlay } from "../lib/index.js";

const options = reactive({
    width: '800px', //播放器高度
    height: '450px', //播放器高度
    color: "#409eff", //主题色
    title: '', //视频名称
    src: "https://litlive-public-resources.s3-us-west-1.amazonaws.com/images/6169ba101c316e057b07528f20ad7c3fdc12f56ddce53b58f2cd8e0ff1b38bbc.mp4", //视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: true, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false,  //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
});
const video = ref(null);

nextTick(() => {
  console.log(video.value);
});
</script>

<style scoped>
</style>
