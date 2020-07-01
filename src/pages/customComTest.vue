<template>
  <!-- 组件测试 -->
  <div class="test">
    <h1>自定义popup</h1>
    <div class="btn" @click="showPopupTop=true">上</div>
    <div class="btn" @click="showPopupBottom=true">下</div>
    <div class="btn" @click="showPopupLeft=true">左</div>
    <div class="btn" @click="showPopupRight=true">右</div>
    <div class="btn" @click="showPopupCenter=true">中</div>
    <v-popup :show.sync="showPopupTop" mode="top" borderRadius="12">
      <div class="content">
        <p>除了长得好看一无是处的我</p>
        <p>也就是宇宙无敌爆炸帅的我!</p>
      </div>
    </v-popup>
    <v-popup :show.sync="showPopupBottom" mode="bottom" borderRadius="12">
      <div class="content">
        <p>除了长得好看一无是处的我</p>
        <p>也就是宇宙无敌爆炸帅的我!</p>
      </div>
    </v-popup>
    <v-popup :show.sync="showPopupLeft" mode="left">
      <div class="content">
        <p>除了长得好看一无是处的我</p>
        <p>也就是宇宙无敌爆炸帅的我!</p>
      </div>
    </v-popup>
    <v-popup :show.sync="showPopupRight" mode="right">
      <div class="content">
        <p>除了长得好看一无是处的我</p>
        <p>也就是宇宙无敌爆炸帅的我!</p>
      </div>
    </v-popup>
    <v-popup :show.sync="showPopupCenter" mode="center" borderRadius="10">
      <div class="content" style="height:200px">
        <p>除了长得好看一无是处的我</p>
        <p>也就是宇宙无敌爆炸帅的我!</p>
      </div>
    </v-popup>
  </div>
</template>

<script>
import vPopup from "../components/v-popup";
export default {
  name: "customComTest",
  components: {
    vPopup
  },
  data() {
    return {
      showPopupTop: false,
      showPopupBottom: false,
      showPopupLeft: false,
      showPopupRight: false,
      showPopupCenter: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="css">
.test {
  width: 100%;
  height: 100%;
  background-color: #f5f8fa;
  padding: 0.3rem 0;
}
.test h1{
  font-size: 0.4rem;
  font-weight: 550;
  margin-bottom: 0.4rem;
}
.test .btn{
  width: 80%;
  padding: 0.3rem;
  background-color: teal;
  color: #ffffff;
  font-size: 0.38rem;
  margin:0.3rem auto 0.3rem;
  border-radius: 0.12rem;
}
.content {
  height: 300px;
  text-align: left;
  padding: 0.3rem;
}
</style>