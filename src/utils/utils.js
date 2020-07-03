import axios from 'axios'
import config from '../api/config' //开发环境域名配置
import Vue from "vue"
var Utils = {};
let CONST = {
    StoragePrefix: 'cg_evaluate_', // sessionStorage缓存前缀
    CookiePrefix: 'cg_evaluate_', // cookie缓存前缀
    CookieExpires: '2h', // cookie缓存时间
}

// 网络请求
Utils.getData = function (app, path, requestData, callback, options) {
    options = options || {}
    options.headers = options.headers || {}
    let headers = {
        // 'Cache-Control': 'no-cache',
        // 'Pragma': 'no-cache',
        // 'Expires': '0',
        "Content-Type": options.headers.contentType || "application/x-www-form-urlencoded"
    }
    if (app.$store.getters.getUserInfo.UserId) {
        headers.UserId = app.$store.getters.getUserInfo.UserId
    }
    if (window.cbsrn && window.cbsrn.native && app.$store.getters.getUserInfo.DeviceId) {
        headers.MobileDeviceId = app.$store.getters.getUserInfo.DeviceId
    }
    var host = process.env.NODE_ENV !== 'production' ? config.devHttpUrl : config.buildHttpUrl;
    var url = path.indexOf('https://') == -1 && path.indexOf('http://') == -1 ? host + path : path
    // 采用FormData格式
    var rData = new FormData()
    for (var key in requestData) {
        rData.append(key, requestData[key])
    }
    axios({
        method: options.type || 'POST',
        url: url,
        data: rData || {},
        timeout: options.timeout || 30 * 1000,
        headers: headers
    })
        .then(res => {
            if (res.status == 200) {
                if (res.data && res.data.ErrorCode == 1001) {
                    // 重复登录
                    if (window.cbsrn && window.cbsrn.native) {
                        Utils.hideLoading(app)
                        window.cbsrn.toast(res.data.ErrorMessage || '同一个账号只能登录一台设备')
                        window.cbsrn.logout()
                        return
                    }
                }
                if (typeof callback == 'function') {
                    callback(res.data)
                }
            } else {
                if (typeof callback == 'function') {
                    callback({ ErrorCode: -1, ErrorMessage: '(请求错误代码' + res.status + ")" }) //请求错误处理
                }
            }
        })
        .catch(err => {
            console.log(err)
            Utils.hideLoading(app);
        });
}

Utils.route = function (app, path) {
    // 统一处理
    app.$router.push(path);
}

// 获取环境链接变量
Utils.getHost = function () {
    return process.env.NODE_ENV !== 'production' ? config.devHttpUrl : config.buildHttpUrl
}
Utils.getfileUrlById = function (id) {
    return Utils.getHost() + '/system/file/download?Id=' + id;
}
Utils.getCookie = function (app, key) {
    return app.$cookie.get(CONST.CookiePrefix + key)
}
Utils.setCookie = function (app, key, value) {
    app.$cookie.set(CONST.CookiePrefix + key, value, { expires: CONST.CookieExpires })
}
Utils.deleteCookie = function (app, key) {
    app.$cookie.delete(CONST.CookiePrefix + key)
}

// storage保存
Utils.getStorage = function (store) {
    return localStorage.getItem(CONST.StoragePrefix + store);
};
Utils.setStorage = function (store, value) {
    localStorage.setItem(CONST.StoragePrefix + store, value);
}
Utils.removeStorage = function (store) {
    localStorage.removeItem(CONST.StoragePrefix + store);
}

// 转换时间戳 '/Date(1540396802000)/'
Utils.dateTransformerFromDateStr = function (dateStr) {
    var date = null
    if (dateStr) {
        var time = parseInt(dateStr.replace('/Date(', '').replace(')/', ''))
        if (!isNaN(time)) {
            date = new Date(time)
        }
    }
    return date ? date : ''
}

/**
 * 时间格式化
 * @param {Date} date Date实例
 * @param {String} fmt fmt：时间格式 yyyy-MM-dd hh:mm:ss
 */
Utils.dateFormatter = function (date, fmt) {
    fmt = fmt || "yyyy-MM-dd hh:mm:ss";
    var o = {
        'M+': date.getMonth() + 1,                   // 月份
        'd+': date.getDate(),                        // 日
        'h+': date.getHours(),                       // 小时
        'm+': date.getMinutes(),                     // 分
        's+': date.getSeconds(),                     // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds()                  // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}

// 转换时间戳 '/Date(1540396802000)/'
Utils.dateTransformerFromDateStr = function (dateStr) {
    var date = null
    if (dateStr) {
        var time = parseInt(dateStr.replace('/Date(', '').replace('(/', ''))
        if (!isNaN(time)) {
            date = new Date(time)
        }
    }
    return date ? date : ''
}

// 从地址中获取指定参数
Utils.getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

// 生成随机字符串 - 默认32位
Utils.getRandomUuid = function (length = 32) {
    const num = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let str = "";
    for (let i = 0; i < length; i++) {
        str += num.charAt(Math.floor(Math.random() * num.length));
    }
    return str;
}

/* 判断是否安卓 */
Utils.isAndroid = function () {
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}

/* 判断是否iOS */
Utils.isIOS = function () {
    var u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

//  判读是否为外链
Utils.isExternal = function (path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

// 判断是否为IP
Utils.isIP = function (ip) {
    const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return reg.test(ip);
}

// 校验日期是否正确
Utils.isValidDate = function (date) {
    return date instanceof Date && !isNaN(date.getTime())
}

// 校验手机号码
Utils.checkPhone = function (phone) {
    return /^1[3456789]\d{9}$/.test(phone)
}

// 验证身份证
Utils.checkIdCard = function (idcard) {
    let regIdCard = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regIdCard.test(idcard)) {
        return false;
    } else {
        let year = idcard.substr(6, 4)
        let month = idcard.substr(10, 2)
        let day = idcard.substr(12, 2)
        return Utils.isValidDate(new Date(year + '/' + month + '/' + day))
    }
}

// 失去焦点重置滚动条blurResetScroll
Utils.blurResetScroll = function () {
    setTimeout(function () {
        let scrollHeight =
            document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
    }, 100);
}

// 计算工作日
Utils.getWorkDate = function (curentDate, nextWorkDays) {
    let T = 24 * 60 * 60 * 1000;
    let start = curentDate.getTime() + T;
    let end = start + nextWorkDays * T;
    let calDate = new Date();
    const en = function (start, end) {
        let holidays = 0;
        for (let d = start; d < end; d += T) {
            calDate.setTime(d);
            let day = calDate.getDay();
            if (day == 0 || day == 6) { //此处为节假日逻辑
                holidays++;
            }
        }
        return holidays ? holidays + en(end, end + holidays * T) : 0;
    }
    calDate.setTime(curentDate.getTime() + (nextWorkDays + en(start, end)) * T);
    let year_time = calDate.getFullYear(); //获取年份
    let month_time = calDate.getMonth() + 1;
    let currentTime_time = calDate.getDate();
    if (month_time >= 1 && month_time <= 9) { //1月到9月 前面加0
        month_time = "0" + month_time;
    }
    if (currentTime_time >= 1 && currentTime_time <= 9) { //1号到9号 前面加0
        currentTime_time = "0" + currentTime_time;
    }
    let workTime = year_time + '-' + month_time + '-' + currentTime_time;
    return workTime;
}

// 显示toast
Utils.toast = function (toastData, callback) {
    if (Vue) {
        // 隐藏已显示的toast
        Vue.$vux.toast.hide();
        toastData = toastData || {}
        if (typeof toastData == "string") {
            toastData = { text: toastData }
        }
        toastData.isShowMask = toastData.isShowMask || false;
        toastData.type = toastData.type || 'text';
        toastData.time = toastData.time || 800;
        toastData.position = toastData.position || 'middle';
        Vue.$vux.toast.show(toastData);
        // 显示结束后回调
        if (callback && callback instanceof Function) {
            setTimeout(callback, toastData.time);
        }
    }
}

// 显示loading
Utils.showLoading = function (loadingData) {
    if (Vue) {
        loadingData = loadingData || {};
        if (typeof loadingData == "string") {
            loadingData = { text: loadingData }
        }
        Vue.$vux.loading.show({
            text: loadingData.text || '正在加载'
        })
    }
}

// 隐藏loading
Utils.hideLoading = function () {
    if (Vue) {
        Vue.$vux.loading.hide()
    }
}

// 显示alert弹窗
Utils.alert = function (alertData) {
    if (Vue) {
        alertData = alertData || {};
        if (typeof alertData == 'string') {
            alertData = { content: alertData }
        }
        Vue.$vux.alert.show({
            title: alertData.title || '提示',
            buttonText: alertData.buttonText || '',
            content: alertData.content || '',
            onShow() {
                if (alertData.onShow instanceof Function) {
                    alertData.onShow();
                }
            },
            onHide() {
                if (alertData.onHide instanceof Function) {
                    alertData.onHide();
                }
            }
        })
    }
}

// 显示confirm确认框
Utils.confirm = function (confirmData) {
    if (Vue) {
        confirmData = confirmData || {};
        if (typeof confirmData == 'string') {
            confirmData = { content: confirmData }
        }
        Vue.$vux.confirm.show({
            title: confirmData.title || '提示',
            content: confirmData.content || '',
            onConfirm() {
                if (confirmData.onConfirm instanceof Function) {
                    confirmData.onConfirm();
                }
            },
            onCancel() {
                if (confirmData.onCancel instanceof Function) {
                    confirmData.onCancel();
                }
            }
        })
    }
}

export default Utils