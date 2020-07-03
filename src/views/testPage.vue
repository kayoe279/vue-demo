<template>
<!-- 接口测试 -->
  <div class="test">
    <div v-for="(item, index) in workbenchList" :key="index">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "testPage",
  data() {
    return {
      workbenchList: []
    };
  },
  methods: {
    async getData() {
      this.$utils.showLoading("正在加载");
      this.$ajax
        .post("kpapi/evafbappeal/search", {
          currentPage: 1,
          pageSize: 2,
          mappingSql: "EvaFbAppeal.List",
          orderby: "ModifiedOn desc",
          searchDict: JSON.stringify({})
        })
        .then(resp => {
          if (resp.ErrorCode == 0) {
            console.log(resp);
          }
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="css">
.test {
  padding: 0.3rem;
}
.test > div {
  padding: 0.2rem 0;
}
</style>