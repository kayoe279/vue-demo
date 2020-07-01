import vLoading from "./vLoading.vue";


let instance;
const installLoading = (Vue,opt) => {
  const Loading = Vue.extend(vLoading);
  if (!instance) {
    instance = new Loading();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el)
  }
  const loading = {
    showLoading: (options, cb) => {
      instance.setDefaultOptions();
      if (typeof options === 'string') {
        instance.title = options;
      } else if (typeof options === 'object') {
        options = Object.assign({},options,opt);
        let {theme, title, type, size, color } = options;
        if (theme) instance.theme = theme;
        if (title) instance.title = title;
        if (type) instance.type = type;
        if (size) instance.size = size;
        if (color) instance.color = color;
      }
      instance.show = true;
      typeof cb == "function" && cb();
    },
    hideLoading: (cb) => {
      instance.show = false;
      typeof cb == "function" && cb();
    }
  }
  Vue.prototype.$loading = loading
}

export default {
  install: installLoading
}