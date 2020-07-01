<template>
  <!-- 组件测试 -->
  <div class="test">
    <h1>自定义Loading</h1>
    <div class="btn" @click="ClickLoading('loading')">显示默认</div>
    <div class="btn" @click="ClickLoading('circle')">circle类型的loading</div>
    <div class="btn" @click="ClickLoading('loading','正在加载')">带文字的loading</div>
    <div class="btn" @click="ClickLoading('loading','黑色主题','dark')">黑色主题loading</div>
    <div class="btn" @click="ClickLoading('loading','请稍等','','cb')">可传回调</div>
    <h1>自定义Toast</h1>
    <div class="btn" @click="ClickToast('middle')">middle</div>
    <div class="btn" @click="ClickToast('top')">top</div>
    <div class="btn" @click="ClickToast('bottom')">bottom</div>
    <div
      class="btn"
      @click="ClickToast('middle','我是一条长文字我是一条长文字我是一条长文字我是一条长文字我是一条长文字我是一条长文字我是一条长文字')"
    >长文字</div>
    <div class="btn" @click="ClickToast('middle','成功提示','success')">成功提示</div>
    <div class="btn" @click="ClickToast('middle','警告提示','warning')">警告提示</div>
  </div>
</template>

<script>
export default {
  name: "loadingTest",
  data() {
    return {
      index: 0
    };
  },
  methods: {
    ClickLoading(type, title, theme, cb) {
      this.$loading.showLoading({ type, title, theme });
      setTimeout(() => {
        this.$loading.hideLoading(() => {
          if (cb) {
            this.$toast("我是加载完成后调用的(#^.^#)");
          }
        });
      }, 2000);
    },
    ClickToast(position, title, type) {
      this.$toast({ title: title || "一个toast模块", position, type });
    }
  },
  mounted() {}
};
</script>
<style lang="css">
.test {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 0.3rem 0;
  overflow-y: auto;
}
.test h1 {
  font-size: 0.4rem;
  font-weight: 550;
  margin-bottom: 0.4rem;
}
.test .btn {
  width: 80%;
  padding: 0.3rem;
  background-color: teal;
  color: #ffffff;
  font-size: 0.38rem;
  margin: 0.3rem auto 0.3rem;
  border-radius: 0.12rem;
}
.content {
  height: 300px;
  text-align: left;
  padding: 0.3rem;
}
</style>