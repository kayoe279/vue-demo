// 全局过滤器
/**
 * 时间格式化
 * @param {Object} date  Date实例
 * @param {String} fmt 时间格式 - yyyy-MM-dd hh:mm:ss
 */
const dateFormatter = function (date, fmt) {
    if (date) {
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
    } else {
        return ''
    }
}

// /Date(xxxxxx)/ ===> YYYY-MM-DD hh:mm
const formatDate = function (dateStr, format) {
    var date = null;
    var f = format || 'yyyy-MM-dd hh:mm'
    var time = "";
    dateStr = String(dateStr);
    if (dateStr) {
        time = dateStr.indexOf('/Date(') != -1 ? parseInt(dateStr.replace('/Date(', '').replace(')/', '')) : parseInt(dateStr)
        if (!isNaN(time)) {
            date = new Date(time)
        }
    }
    return date ? dateFormatter(date, f) : ''
}
//  T
const dateFromDateTime = function (dateStr, format) {
    var f = format || 'yyyy-MM-dd hh:mm';
    dateStr = String(dateStr);
    var date = null;
    if (dateStr) {
        dateStr = dateStr.replace('T', ' ').replace(/-/g, '/');
        date = new Date(dateStr)
    }
    return date ? dateFormatter(date, f) : ''
}

const formatNumber = function (num) {
    if (isNaN(num)) {
        return ""
    } else {
        return num < 10 ? '0' + num : num
    }

}

export {
    formatDate,
    dateFromDateTime,
    formatNumber
}