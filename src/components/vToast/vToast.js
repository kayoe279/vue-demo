import vToast from "./vToast.vue";

let instance;
let timer;
const install = (Vue, opt) => {
  const Loading = Vue.extend(vToast);
  if (!instance) {
    instance = new Loading();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el)
  }
  const toast = (options, cb) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
      instance.setDefaultOptions();
    }
    let time = 1500;
    if (typeof options === 'string') {
      instance.title = options;
    } else if (typeof options === 'object') {
      options = Object.assign({}, options, opt);
      let { title, type, size, duration, position } = options;
      if (title) instance.title = title;
      if (type) instance.type = type;
      if (size) instance.size = size;
      if (position) instance.position = position;
      if (duration) {
        instance.duration = duration;
        time = duration;
      }
    }
    instance.show = true;
    typeof cb == "function" && cb();
    timer = setTimeout(() => {
      instance.showToast = false;
      setTimeout(() => {
        instance.show = false;
      }, 100);
    }, time)
  }
  Vue.prototype.$toast = toast
}

export default {
  install
}