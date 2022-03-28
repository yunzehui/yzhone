// 插件
// let myplugin = {
//     // 把插件都挂在Vue的原型上
//     install(Vue) {
//         Vue.prototype.cuiplugin = function () {
//             console.log("云泽会")
//         }
//     }
// }
// let myplugin = function (Vue) {
//     Vue.prototype.cuifn = function () {
//         console.log("11111");
//     }
// }
// 防抖
let myplugin = function (Vue) {
    Vue.prototype.debouncefn = function (ff, wait) {
        var timer = null;
        return function () {
            clearTimeout(timer)
            timer = setTimeout(function () {
                ff()
            }, wait)
        }
    }
    Vue.prototype.throttlefn = function (ff, wait) {
        console.log("===");
    }
}
export default myplugin