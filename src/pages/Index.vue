<template>
  <div id="hello">
    <header></header>
    <div class="buttons">
      <button @click="toPage('first')">第一个page</button>
      <button @click="toPage('second')">第二个page</button>
      <button @click="change">数量加1</button>
      <button @click="clearList">重置count</button>
      <button @click="skipHttpPage">接口页</button>
      <button @click="skipfall">瀑布流布局页面</button>
      <button @click="skipTest('vant')">vant组件测试</button>
      <button @click="skipTest('com')">自定义popup组件测试</button>
      <button @click="skipTest('loading')">loading/toast测试</button>
    </div>
    <span class="count">数量:{{count}}</span>
    <span>showPubSub值:{{showPubSub}}</span>
    <main>
      <div class="box">
        <div>VUEX控制</div>
        <button @click="sortAge">按岁数排序</button>
        <ul>
          <li v-for="(item, index) in List" :key="index">
            <span>姓名:{{item.name}},年龄:{{item.age}}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import PubSub from "pubsub-js";
import {
  TransferDomDirective as TransferDom,
  Actionsheet,
  Popover,
  Tab,
  TabItem
} from "vux";
export default {
  name: "Index",
  directives: {
    TransferDom
  },
  components: {
    Actionsheet,
    Popover,
    Tab,
    TabItem
  },
  data() {
    return {
      show2: false,
      msg: "Welcome to my IndexPage",
      picker: [
        { label: "<b style='color:red'>拍照</b>", type: "creame" },
        { label: "从相册选择", type: "selectPhoto" }
      ],
      allList: [
        { name: "xiaoming", age: 13, weight: 20 },
        { name: "liming", age: 23, weight: 21 },
        { name: "zhangming", age: 8, weight: 66 },
        { name: "liming", age: 55, weight: 21 },
        { name: "lisa", age: 72, weight: 21 },
        { name: "maliya", age: 336, weight: 21 },
        { name: "zhangsan", age: 596, weight: 21 },
        { name: "wangwu", age: 1352, weight: 21 },
        { name: "kangkang", age: 11, weight: 21 },
        { name: "datiedan", age: 2, weight: 21 }
      ],
      showPubSub: null
    };
  },
  computed: {
    ...mapGetters({
      title: "getTitle",
      count: "getCount",
      List: "getList"
    })
  },
  methods: {
    toPage(page) {
      // 三种跳转方式
      this.$router.push({ path: "/" + page });
      // this.$router.push({name:page.substr(0,1).toUpperCase() + page.substr(1)})
      // this.$router.push('/' + page)
    },
    skipHttpPage(){
        this.$router.push({ path: "/testPage" });
    },
    skipfall() {
      this.$router.push({ path: "/waterfall" });
    },
    skipTest(type){
      let routerLink={
        vant:"/vantTest",
        com:"/customComTest",
        loading:"/loadingTest"
      }
      this.$router.push({ path: routerLink[type] });
    },
    change() {
      if (this.count === this.allList.length) return;
      this.item = this.allList[this.count];
      this.invokeList(this.item); // 或者  this.$store.dispatch("invokeList", this.item);
      this.increment(1); // 或者 this.$store.commit("increment", 1); 
    },
    ...mapMutations(["increment"]),
    ...mapActions(["clearList", "invokeList"]), 
    // 排序
    sortAge() {
      if (this.List.length === 0) return;
      this.$vux.loading.show();
      this.List.sort(function(a, b) {
        return a.age - b.age;
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 300);
    },
    showPicker() {
      this.show2 = true;
    }
  },
  beforeDestroy() {
    // 销毁订阅
    PubSub.unsubscribe("changeState");
  },
  mounted() {
    // console.log()
    // this.$axios.get('/all.json').then(r lt=>{
    //   console.log(rlt)
    // })
    let _this = this;
    PubSub.subscribe("changeState", (event, data) => {
      _this.showPubSub = data;
      console.log(data);
    });
  }
};
</script>

<style lang="scss">
#hello {
  background-color: #fff;
  box-sizing: initial;
  padding-bottom: 0.5rem;
  header {
    width: 100%;
    height: 5rem;
    background: url("../assets/img/BasicsBg.png") no-repeat;
    background-size: 100% 100%;
  }
  .count {
    font-size: 0.32rem;
  }
  main {
    width: 100%;
    margin-top: 0.6rem;
    padding: 0.3rem;
    .box {
      width: 100%;
      border-radius: 0.12rem;
      background-image: url("https://image.weilanwl.com/color2.0/cardBg.png");
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 1;
      background-color: #1cbbb4;
      padding: 0.3rem;
      color: #fff;
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: inherit;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -10%;
        border-radius: 0.1rem;
        opacity: 0.2;
        transform: scale(0.9, 0.9);
      }
    }
    ul li {
      width: 100%;
      padding: 0.15rem 0;
    }
    button {
      width: 100%;
      padding: 0.12rem 0;
      border-radius: 0.12rem;
      margin-top: 0.2rem;
      background-color: #fff;
      color: #1cbbb4;
    }
  }
  .buttons {
    padding: 0.3rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    button {
      width: 100%;
      height: 0.7rem;
      line-height: 0.7rem;
      border-radius: 0.12rem;
      padding: 0 0.1rem;
      margin: 0 0 0.2rem 0rem;
      font-size: 0.28rem;
      background-color: #8799a3;
      color: #fff;
      box-shadow: rgba(26, 26, 26, 0.2);
    }
  }
}
</style>
